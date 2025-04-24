import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../domain/repositories/IUserRepository";
import { IUpdateUser } from "../domain/models/IUpdateUser";
import { User } from "../infra/typeorm/entities/User";

@injectable()
class UpdateUserService {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository
    ) {}

    async execute({
        id,
        name,
        email,
        birthDate,
    }: IUpdateUser): Promise<User> {
        const user = await this.userRepository.findById(id);

        if(!user) {
            throw new Error('Usuário não encontrado');
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;
        user.birthDate = birthDate ?? user.birthDate;

        await this.userRepository.save(user);

        return user;
    }
}

export default UpdateUserService;