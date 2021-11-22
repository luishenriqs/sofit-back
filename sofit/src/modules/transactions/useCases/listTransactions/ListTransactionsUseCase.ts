import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { Transaction } from "../../entities/Transaction";
import { ITransactionRepository } from "../../repositories/ITransactionRepository";

@injectable()
class ListTransactionsUseCase {
    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository,
    ) {};
    async execute(): Promise<Transaction[] | void> {
        let transactions = await this.transactionRepository.list();
        return transactions;
    }
};

export { ListTransactionsUseCase };