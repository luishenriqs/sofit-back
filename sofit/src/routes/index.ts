import { Router } from 'express';
import { authenticateUserRoutes } from '../routes/authenticate.routes';
import { userRoutes } from '../routes/user.routes';
import { transactionRoutes } from '../routes/trasaction.routes';

const router = Router();

router.use(authenticateUserRoutes);
router.use("/user", userRoutes);
router.use("/trasaction", transactionRoutes);

export { router };