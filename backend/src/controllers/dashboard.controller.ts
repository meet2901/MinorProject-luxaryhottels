import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export async function getDashboard(_req: Request, res: Response) {
  try {
    const totalBookings = await prisma.booking.count();
    const revenueAgg = await prisma.booking.aggregate({ _sum: { totalAmount: true } });
    const totalRevenue = revenueAgg._sum.totalAmount || 0;

    const totalRooms = await prisma.room.count();
    const occupiedRooms = await prisma.room.count({ where: { status: 'occupied' } });
    const occupancyRate = totalRooms > 0 ? Math.round((occupiedRooms / totalRooms) * 100) : 0;

    const averageRating = 4.6; // Placeholder, integrate ratings model if needed

    const recentBookings = await prisma.booking.findMany({
      include: { user: true, room: true },
      orderBy: { createdAt: 'desc' },
      take: 5
    });

    const roomStatus = await prisma.room.findMany({ select: { id: true, name: true, status: true } });

    res.json({
      stats: {
        totalBookings,
        totalRevenue,
        occupancyRate,
        averageRating
      },
      recentBookings: recentBookings.map(b => ({
        id: b.id,
        guestName: b.user.name,
        roomType: b.room.name,
        checkIn: b.checkIn,
        checkOut: b.checkOut,
        status: b.status
      })),
      roomStatus
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
}