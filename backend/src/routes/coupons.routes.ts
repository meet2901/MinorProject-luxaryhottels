import { Router } from 'express';
import { listCoupons, validateCoupon, createCoupon } from '../controllers/coupons.controller';
import { requireAuth, requireAdmin } from '../middleware/auth';

const router = Router();

router.get('/', listCoupons);
router.post('/validate', validateCoupon);
router.post('/', requireAuth, requireAdmin, createCoupon);

export default router;