import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class FindByIdUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) {};
    async execute({ id }): Promise<User | void> {
        let user = await this.userRepository.findById(id);
        return user;
    }
};

export { FindByIdUseCase };