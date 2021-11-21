import { getRepository, Repository } from 'typeorm';
import { Transaction } from '../../entities/Transaction';
import { ITransactionRepository } from '../ITransactionRepository';
import { ICreateTransactionDTO } from '../../dtos/ICreateTransactionDTO';

class TransactionRepository implements ITransactionRepository {

    private repository: Repository<Transaction>;

    constructor() {
        this.repository = getRepository(Transaction); 
    };

    async create({
        category,
        value,
        type,
        description,
    }: ICreateTransactionDTO): Promise<void> {

        const transaction = this.repository.create({
            category,
            value,
            type,
            description,
        });

        await this.repository.save(transaction);
    }

    async list(): Promise<Transaction[] | void> {
        const transactions = await this.repository.find();
        return transactions;
    }

    async findByType(type: string): Promise<Transaction[] | void> {
        const transactions = await this.repository.find({ type });
        return transactions;
    }

};

export { TransactionRepository };