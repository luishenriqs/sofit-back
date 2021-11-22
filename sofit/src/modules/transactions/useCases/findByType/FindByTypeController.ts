import { Request, Response } from "express";
import { container } from 'tsyringe';
import { FindByTypeUseCase } from './FindByTypeUseCase';

class FindByTypeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { type } = request.query;
        const findByTypeUseCase = container.resolve(FindByTypeUseCase);
        const transactions = await findByTypeUseCase.execute({ type });
        return response.json(transactions);
    };
};

export { FindByTypeController };