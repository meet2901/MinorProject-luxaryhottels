import { Response } from 'express';
import { prisma } from '../lib/prisma';
import { AuthRequest } from '../middleware/auth';

function nightsBetween(checkIn: Date, checkOut: Date) {
  const msPerDay = 24 * 60 * 60 * 1000;
  const diff = Math.ceil((checkOut.getTime() - checkIn.getTime()) / msPerDay);
  return Math.max(diff, 1);
}

export async function createBooking(req: AuthRequest, res: Response) {
  try {
    const userId = req.user!.id;
    const { roomId, checkIn, checkOut } = req.body;
    if (!roomId || !checkIn || !checkOut) return res.status(400).json({ error: 'Missing fields' });
    const room = await prisma.room.findUnique({ where: { id: Number(roomId) } });
    if (!room) return res.status(404).json({ error: 'Room not found' });
    const ci = new Date(checkIn);
    const co = new Date(checkOut);
    const nights = nightsBetween(ci, co);
    const totalAmount = room.price * nights;

    const booking = await prisma.booking.create({ data: { userId, roomId: Number(roomId), checkIn: ci, checkOut: co, status: 'pending', totalAmount } });
    await prisma.room.update({ where: { id: room.id }, data: { status: 'occupied' } });
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create booking' });
  }
}

export async function listMyBookings(req: AuthRequest, res: Response) {
  try {
    const userId = req.user!.id;
    const bookings = await prisma.booking.findMany({ where: { userId }, include: { room: true }, orderBy: { createdAt: 'desc' } });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to list bookings' });
  }
}

export async function listAllBookings(_req: AuthRequest, res: Response) {
  try {
    const bookings = await prisma.booking.findMany({ include: { user: true, room: true }, orderBy: { createdAt: 'desc' } });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to list all bookings' });
  }
}

export async function updateBookingStatus(req: AuthRequest, res: Response) {
  try {
    const id = Number(req.params.id);
    const { status } = req.body as { status: 'pending' | 'confirmed' | 'cancelled' };
    if (!status) return res.status(400).json({ error: 'Missing status' });
    const booking = await prisma.booking.update({ where: { id }, data: { status } });
    if (status === 'cancelled') {
      await prisma.room.update({ where: { id: booking.roomId }, data: { status: 'available' } });
    }
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update booking status' });
  }
}