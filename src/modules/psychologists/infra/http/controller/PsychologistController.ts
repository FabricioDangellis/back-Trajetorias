import { Request, Response } from "express";
import CreatePsychologistService from "modules/psychologists/services/CreatePsychologistService";
import { container } from "tsyringe";

class PsychologistsController {
    async create(request: Request, response: Response): Promise<void> {
        const {name, email, password, birthDate, cpf, specialty, crv} = request.body;

        const createPsychologistService = container.resolve(CreatePsychologistService

        );

        const psychologist = await createPsychologistService.execute({
            name,
            email,
            password,
            birthDate,
            cpf,
            specialty,
            crv,
        });

        response.json(psychologist);
    }
}

export default PsychologistsController;