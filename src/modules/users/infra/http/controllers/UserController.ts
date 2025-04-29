import CreateUserService from 'modules/users/services/CreateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateUserService from 'modules/users/services/UpdateUserService';
import DeleteUserService from 'modules/users/services/DeleteUserService';

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

    async update(request: Request, response:Response): Promise<void> {
        const {id} = request.params;
        const {name, email, birthDate} = request.body;

        try {
            const updateUserService = container.resolve(UpdateUserService);

            const user = await updateUserService.execute({
                id,
                name,
                email,
                birthDate,
            })

            response.json(user);
        }catch(error: any) {
            response.status(error.statusCode || 500).json({
                status: 'error',
                message: error.message,
            });
        }
    }

    async delete(request: Request, response: Response): Promise<void> {
        const {id} = request.params;

        try {
            const deleteUserService = container.resolve(DeleteUserService);
            
            const user = await deleteUserService.execute(id);

            response.json(user);
        }catch(error: any) {
            response.status(error.statusCode || 500).json({
                status: 'error',
                message: error.message,
            });
        }
    }

}

export default UserController;