import { Router } from "express";
import { CreateTransactionController } from "../modules/transactions/useCases/createTransaction/CreateTransactionController";
import { ListTransactionsController } from "../modules/transactions/useCases/listTransactions/ListTransactionsController";
import { FindByTypeController } from "../modules/transactions/useCases/findByType/FindByTypeController";

const transactionRoutes = Router();

const createTransactionController = new CreateTransactionController();
const listTransactionsController = new ListTransactionsController();
const findByTypeController = new FindByTypeController();

transactionRoutes.post("/", createTransactionController.handle);
transactionRoutes.get("/", listTransactionsController.handle);
transactionRoutes.get("/findbyType", findByTypeController.handle);

export { transactionRoutes };