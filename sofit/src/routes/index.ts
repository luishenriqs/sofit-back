import { Router } from 'express';
import { authenticateUserRoutes } from '../routes/authenticate.routes';
import { userRoutes } from '../routes/user.routes';

const router = Router();

router.use(authenticateUserRoutes);
router.use("/user", userRoutes);

export { router };