import { User } from '../entities/User';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

interface IUserRepository {
    create({
        user_name,
        email,
        password,
    }: ICreateUserDTO): Promise<void>;

    list(): Promise<User[]>;

    findById(id: string): Promise<User | void>;

    findByName(user_name: string): Promise<User | void>;

    findByEmail(email: string): Promise<User | void>;
};

export { IUserRepository };