import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateTransactionUseCase } from './CreateTransactionUseCase';

class CreateTransactionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            category,
            value,
            type,
            description,
        } = request.body;
       
        const createTransactionUseCase = container.resolve(CreateTransactionUseCase);

        await createTransactionUseCase.execute({
            category,
            value,
            type,
            description,
        });
    
        return response.status(201).send();
    };
};

export { CreateTransactionController };