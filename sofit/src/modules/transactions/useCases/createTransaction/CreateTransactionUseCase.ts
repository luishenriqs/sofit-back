import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { ITransactionRepository } from "../../repositories/ITransactionRepository";
import { ICreateTransactionDTO } from '../../dtos/ICreateTransactionDTO';

@injectable()
class CreateTransactionUseCase {
    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository,
    ) {};

    async execute({
        category,
        value,
        type,
        description,
    }: ICreateTransactionDTO): Promise<void> {

        await this.transactionRepository.create({
            category,
            value,
            type,
            description,
        })
    };
};

export { CreateTransactionUseCase };