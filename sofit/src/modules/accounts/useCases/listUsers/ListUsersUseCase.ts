import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class ListUsersUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) {};
    async execute(): Promise<User[]> {
        let users = await this.userRepository.list();
        return users;
    }
};

export { ListUsersUseCase };