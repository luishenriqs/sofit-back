import { getRepository, Repository } from 'typeorm';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

class UserRepository implements IUserRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User); 
    };

    async create({
        user_name,
        email,
        password,
    }: ICreateUserDTO): Promise<void> {

        const user = this.repository.create({
            user_name,
            email,
            password,
        });

        await this.repository.save(user);
    }

    async list(): Promise<User[]> {
        const user = await this.repository.find();
        return user;
    }

    async findById(id: string): Promise<User | void> {
        const user = await this.repository.findOne( id );
        return user;
    }

    async findByName(user_name: string): Promise<User | void> {
        const user = await this.repository.findOne({ user_name });
        return user;
    }

    async findByEmail(email: string): Promise<User | void> {
        const user = await this.repository.findOne({ email });
        return user;
    }
};

export { UserRepository };