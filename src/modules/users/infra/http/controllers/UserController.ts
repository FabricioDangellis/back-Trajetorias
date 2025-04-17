import CreateUserService from 'modules/users/services/CreateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class UserController {

    async create(request: Request, response: Response): Promise<void> {
        const {name, email, password, type, birthDate, cpf} = request.body;

        const createUserService = container.resolve(CreateUserService);

        const user = await createUserService.execute({
            name,
            email,
            password,
            type,
            birthDate,
            cpf,
        });

        response.json(user);
    }

}

export default UserController;