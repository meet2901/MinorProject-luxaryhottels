import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export async function listCoupons(_req: Request, res: Response) {
  try {
    const coupons = await prisma.coupon.findMany({ where: { active: true }, orderBy: { createdAt: 'desc' } });
    res.json(coupons);
  } catch (err) {
    res.status(500).json({ error: 'Failed to list coupons' });
  }
}

export async function validateCoupon(req: Request, res: Response) {
  try {
    const { code } = req.body;
    if (!code) return res.status(400).json({ error: 'Missing code' });
    const now = new Date();
    const coupon = await prisma.coupon.findUnique({ where: { code } });
    if (!coupon || !coupon.active || (coupon.expiresAt && coupon.expiresAt < now)) {
      return res.status(404).json({ error: 'Invalid or expired coupon' });
    }
    res.json({ code: coupon.code, discountPercent: coupon.discountPercent, description: coupon.description });
  } catch (err) {
    res.status(500).json({ error: 'Failed to validate coupon' });
  }
}

export async function createCoupon(req: Request, res: Response) {
  try {
    const { code, description, discountPercent, active, expiresAt } = req.body;
    if (!code || !description || !discountPercent) return res.status(400).json({ error: 'Missing fields' });
    const coupon = await prisma.coupon.create({
      data: {
        code,
        description,
        discountPercent: Number(discountPercent),
        active: active !== undefined ? Boolean(active) : true,
        expiresAt: expiresAt ? new Date(expiresAt) : undefined
      }
    });
    res.status(201).json(coupon);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create coupon' });
  }
}