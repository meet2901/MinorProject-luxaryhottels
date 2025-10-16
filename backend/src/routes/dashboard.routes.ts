import { Router } from 'express';
import { getDashboard } from '../controllers/dashboard.controller';
import { requireAuth, requireAdmin } from '../middleware/auth';

const router = Router();

router.get('/dashboard', requireAuth, requireAdmin, getDashboard);

export default router;