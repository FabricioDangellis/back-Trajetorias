import { IPsychologistsRepository } from "modules/psychologists/domain/repositories/IPsychologistsRepository";
import { injectable } from "tsyringe";
import { Psychologists } from "../entities/Psychologists";
import { Repository } from "typeorm";
import { AppDataSource } from "shared/infra/http/database/data-source";
import { ICreatePsychologistsRepository } from "modules/psychologists/domain/models/ICreatePsychologistsRepository";

@injectable()
class PsychologistsRepository implements IPsychologistsRepository {

    private ormRepository: Repository<Psychologists>;

    constructor() {
        this.ormRepository = AppDataSource.getRepository(Psychologists);
    }

    async create({
        specialty,
        crv,
    }: ICreatePsychologistsRepository): Promise<Psychologists> {
        const psychologists = this.ormRepository.create({
            specialty,
            crv,
        });

        await this.ormRepository.save(psychologists);
        return psychologists;
    }

    async findByCRV(crv: string): Promise<Psychologists | null> {
        return await this.ormRepository.findOne({ where: { crv } });
    }

}

export default PsychologistsRepository; 