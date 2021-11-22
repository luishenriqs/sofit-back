import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { Transaction } from "../../entities/Transaction";
import { ITransactionRepository } from "../../repositories/ITransactionRepository";

@injectable()
class FindByTypeUseCase {
    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository,
    ) {};
    async execute({ type }): Promise<Transaction[] | void> {
        let transactions = await this.transactionRepository.findByType(type);
        return transactions;
    }
};

export { FindByTypeUseCase };