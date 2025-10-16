import { Router } from 'express';
import { createBooking, listMyBookings, listAllBookings, updateBookingStatus } from '../controllers/bookings.controller';
import { requireAuth, requireAdmin } from '../middleware/auth';

const router = Router();

router.post('/', requireAuth, createBooking);
router.get('/', requireAuth, listMyBookings);
router.get('/admin', requireAuth, requireAdmin, listAllBookings);
router.patch('/:id/status', requireAuth, requireAdmin, updateBookingStatus);

export default router;