import { Router } from 'express';
import { authenticateUserRoutes } from '../routes/authenticate.routes';
import { userRoutes } from '../routes/user.routes';
import { transactionRoutes } from '../routes/transaction.routes';

const router = Router();

router.use(authenticateUserRoutes);
router.use("/user", userRoutes);
router.use("/transaction", transactionRoutes);

export { router };