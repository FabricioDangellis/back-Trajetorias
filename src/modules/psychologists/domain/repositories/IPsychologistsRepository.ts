import { Psychologists } from "modules/psychologists/infra/typeorm/entities/Psychologists";
import { ICreatePsychologistsRepository } from "../models/ICreatePsychologistsRepository";

export interface IPsychologistsRepository {
    findByCRV(crv: string): unknown;
    create(data: ICreatePsychologistsRepository): Promise<Psychologists>;}