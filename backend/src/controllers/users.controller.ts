import { Response } from 'express';
import { prisma } from '../lib/prisma';
import { AuthRequest } from '../middleware/auth';

export async function getMe(req: AuthRequest, res: Response) {
  try {
    const userId = req.user!.id;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ id: user.id, name: user.name, email: user.email, role: user.role, avatarUrl: user.avatarUrl });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
}

export async function updateMe(req: AuthRequest, res: Response) {
  try {
    const userId = req.user!.id;
    const { name, avatarUrl } = req.body;
    const user = await prisma.user.update({ where: { id: userId }, data: { name, avatarUrl } });
    res.json({ id: user.id, name: user.name, email: user.email, role: user.role, avatarUrl: user.avatarUrl });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
}

export async function uploadAvatar(req: AuthRequest, res: Response) {
  try {
    const userId = req.user!.id;
    const file = (req as any).file as Express.Multer.File | undefined;
    if (!file) return res.status(400).json({ error: 'No file uploaded' });
    const avatarUrl = `/uploads/${file.filename}`;
    const user = await prisma.user.update({ where: { id: userId }, data: { avatarUrl } });
    res.json({ avatarUrl: user.avatarUrl });
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload avatar' });
  }
}