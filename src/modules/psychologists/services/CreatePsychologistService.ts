import { inject, injectable } from "tsyringe";
import { IPsychologistsRepository } from "../domain/repositories/IPsychologistsRepository";
import { ICreatePsychologist } from "../domain/models/ICreatePsychologist";
import { Psychologists } from "../infra/typeorm/entities/Psychologists";
import CreateUserService from "modules/users/services/CreateUserService";

@injectable()
class CreatePsychologistService {
    constructor(
        @inject('PsychologistsRepository')
        private psychologistsRepository: IPsychologistsRepository,

        @inject('CreateUserService')
        private createUserService: CreateUserService
    ) { }

    async execute({
        name,
        email,
        password,
        birthDate,
        cpf,
        specialty,
        crv,
    }: ICreatePsychologist): Promise<Psychologists> {
        const user = await this.createUserService.execute({
            name,
            email,
            password,
            birthDate,
            cpf,
            type: 'psicologo',
        });

        const crvExist = await this.psychologistsRepository.findByCRV(crv);

        if (crvExist) {
            throw new Error('CRV já cadastrado');
        }

      const psychologists = await this.psychologistsRepository.create({
          specialty,
          crv,
      });

      return psychologists;

    }
}

export default CreatePsychologistService;