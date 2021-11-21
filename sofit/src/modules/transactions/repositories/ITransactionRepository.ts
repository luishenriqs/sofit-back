import { Transaction } from '../entities/Transaction';
import { ICreateTransactionDTO } from '../dtos/ICreateTransactionDTO';

interface ITransactionRepository {
    create({
        category,
        value,
        type,
        description,
    }: ICreateTransactionDTO): Promise<void>;

    list(): Promise<Transaction[] | void>;

    findByType(type: string): Promise<Transaction[] | void>;
};

export { ITransactionRepository };