import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';
import { IUserRepository } from '../domain/repositories/IUserRepository';
import { ICreateUser } from '../domain/models/ICreateUser';
import { User } from '../infra/typeorm/entities/User';

@injectable()
class CreateUserService {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository
    ) {}

    async execute({
        name,
        email,
        password,
        type,
        birthDate,
        cpf,
    }: ICreateUser): Promise<User> {
        const cpfExist = await this.userRepository.findByCPF(cpf);

        if(cpfExist) {
            throw new Error('Usuário já cadastrado');
        }

        const emailExist = await this.userRepository.findByEmail(email);

        if(emailExist) {
            throw new Error('Email já cadastrado');
        }

        const hashedPassword = await hash(password, 8);

        const user = await this.userRepository.create({
            name,
            email,
            password: hashedPassword,
            type,
            birthDate,
            cpf,
        });

        return user;
    }

}

export default CreateUserService;