import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ListUsersController } from "../modules/accounts/useCases/listUsers/ListUsersController";
import { FindByNameController } from "../modules/accounts/useCases/findByName/FindByNameController";
import { FindByIdController } from "../modules/accounts/useCases/findById/FindByIdController";
import { FindByEmailController } from "../modules/accounts/useCases/findByEmail/FindByEmailController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const findByNameController = new FindByNameController();
const findByIdController = new FindByIdController();
const findByEmailController = new FindByEmailController();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/list", listUsersController.handle);
userRoutes.get("/findbyname", findByNameController.handle);
userRoutes.get("/findbyid", findByIdController.handle);
userRoutes.get("/findbyemail", findByEmailController.handle);

export { userRoutes };