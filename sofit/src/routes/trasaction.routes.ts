import { Router } from "express";
import { CreateTransactionController } from "../modules/transactions/useCases/createTransaction/CreateTransactionController";
// import { ListUsersController } from "../modules/transactions/useCases/listUsers/ListUsersController";
// import { FindByNameController } from "../modules/transactions/useCases/findByName/FindByNameController";

const transactionRoutes = Router();

const createTransactionController = new CreateTransactionController();
// const listUsersController = new ListUsersController();
// const findByNameController = new FindByNameController();

transactionRoutes.post("/", createTransactionController.handle);
// transactionRoutes.get("/list", listUsersController.handle);
// transactionRoutes.get("/findbyType", findByNameController.handle);

export { transactionRoutes };