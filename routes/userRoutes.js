import { Router } from 'express';
import { register, login, deleteUser } from '../controllers/userController.js';
import { auth } from '../middleware/auth.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.delete('/:id', auth, deleteUser);

export default router;
