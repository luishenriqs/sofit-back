import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindByEmailUseCase } from './FindByEmailUseCase';

class FindByEmailController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.query;
        const findByEmailUseCase = container.resolve(FindByEmailUseCase);
        const user = await findByEmailUseCase.execute({ email });
        return response.json(user);
    };
};

export { FindByEmailController };