import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export async function listRooms(_req: Request, res: Response) {
  try {
    const rooms = await prisma.room.findMany({ orderBy: { id: 'asc' } });
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: 'Failed to list rooms' });
  }
}

export async function getRoom(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const room = await prisma.room.findUnique({ where: { id } });
    if (!room) return res.status(404).json({ error: 'Room not found' });
    res.json(room);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get room' });
  }
}

export async function createRoom(req: Request, res: Response) {
  try {
    const { name, description, price, capacity, imageUrl, status } = req.body;
    if (!name || !price) return res.status(400).json({ error: 'Missing required fields' });
    const room = await prisma.room.create({ data: { name, description, price: Number(price), capacity: Number(capacity) || 2, imageUrl, status: status || 'available' } });
    res.status(201).json(room);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create room' });
  }
}

export async function updateRoom(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { name, description, price, capacity, imageUrl, status } = req.body;
    const room = await prisma.room.update({ where: { id }, data: { name, description, price: price !== undefined ? Number(price) : undefined, capacity, imageUrl, status } });
    res.json(room);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update room' });
  }
}