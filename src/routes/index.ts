import { Router } from 'express';
import { setAuthRoutes } from './auth.routes';

export function setRoutes(app: Router) {
    setAuthRoutes(app);
    // Add other route setups here in the future
}