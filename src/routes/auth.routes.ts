import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const router = Router();
const authController = new AuthController();

export function setAuthRoutes(app: Router) {
    app.post('/login', authController.login);
    app.post('/register', authController.register);
}

export default router;