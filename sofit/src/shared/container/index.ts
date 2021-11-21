import { container } from 'tsyringe';
import { UserRepository } from '../../modules/accounts/repositories/implementations/UserRepository';
import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository';
import { TransactionRepository } from '../../modules/transactions/repositories/implementations/TransactionRepository';
import { ITransactionRepository } from '../../modules/transactions/repositories/ITransactionRepository';


container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
);

container.registerSingleton<ITransactionRepository>(
    "TransactionRepository",
    TransactionRepository
);
