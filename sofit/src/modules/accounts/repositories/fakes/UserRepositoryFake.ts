import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepositoryFake implements IUserRepository {
    users: User[] = [];

    async create({
        user_name, 
        email, 
        password,
    }: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            user_name, 
            email, 
            password,
        });

        this.users.push(user);
    }

    async list(): Promise<User[]> {
        const all = this.users;
        return all;
    }

    async findById(id: string): Promise<User | void> {
        return this.users.find((user) => user.id === id);
    }

    async findByName(user_name: string): Promise<User | void> {
        return this.users.find((user) => user.user_name === user_name);
    }

    async findByEmail(email: string): Promise<User | void> {
        return this.users.find((user) => user.email === email);
    }
};

export { UserRepositoryFake };