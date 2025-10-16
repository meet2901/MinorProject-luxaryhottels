import { Router } from 'express';
import { getMe, updateMe, uploadAvatar } from '../controllers/users.controller';
import { requireAuth } from '../middleware/auth';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });
const router = Router();

router.get('/me', requireAuth, getMe);
router.put('/me', requireAuth, updateMe);
router.post('/me/avatar', requireAuth, upload.single('avatar'), uploadAvatar);

export default router;