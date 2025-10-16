import { Router } from 'express';
import { listRooms, getRoom, createRoom, updateRoom } from '../controllers/rooms.controller';
import { requireAuth, requireAdmin } from '../middleware/auth';

const router = Router();

router.get('/', listRooms);
router.get('/:id', getRoom);
router.post('/', requireAuth, requireAdmin, createRoom);
router.put('/:id', requireAuth, requireAdmin, updateRoom);

export default router;