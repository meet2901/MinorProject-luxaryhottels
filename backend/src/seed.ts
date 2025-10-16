import 'dotenv/config';
import { prisma } from './lib/prisma';
import bcrypt from 'bcryptjs';

async function main() {
  // Admin user
  const adminEmail = 'admin@hotel.local';
  const adminPassword = 'admin123';
  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash(adminPassword, 10);
    await prisma.user.create({ data: { name: 'Admin', email: adminEmail, passwordHash, role: 'ADMIN' } });
    console.log('Seeded admin user:', adminEmail, 'password:', adminPassword);
  }

  // Rooms
  const roomsCount = await prisma.room.count();
  if (roomsCount === 0) {
    await prisma.room.createMany({
      data: [
        { name: 'Presidential Suite', description: 'Top-tier suite with ocean view', price: 22500, capacity: 4, imageUrl: '', status: 'available' },
        { name: 'Ocean View Deluxe', description: 'Deluxe room with sea view', price: 12000, capacity: 2, imageUrl: '', status: 'available' },
        { name: 'Executive Suite', description: 'Spacious suite for business travelers', price: 16000, capacity: 3, imageUrl: '', status: 'available' },
        { name: 'Family Suite', description: 'Perfect for families with extra space', price: 18000, capacity: 4, imageUrl: '', status: 'available' },
        { name: 'Penthouse Suite', description: 'Luxurious penthouse with city view', price: 39600, capacity: 4, imageUrl: '', status: 'available' },
        { name: 'Standard Room', description: 'Comfortable standard room', price: 6000, capacity: 2, imageUrl: '', status: 'available' },
        { name: 'Deluxe Room', description: 'Upgraded amenities and space', price: 9000, capacity: 2, imageUrl: '', status: 'available' }
      ]
    });
    console.log('Seeded rooms');
  }

  // Coupons
  const couponsCount = await prisma.coupon.count();
  if (couponsCount === 0) {
    await prisma.coupon.createMany({
      data: [
        { code: 'SAVE10', description: '10% off your booking', discountPercent: 10, active: true },
        { code: 'FESTIVE15', description: '15% festival discount', discountPercent: 15, active: true }
      ]
    });
    console.log('Seeded coupons');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });