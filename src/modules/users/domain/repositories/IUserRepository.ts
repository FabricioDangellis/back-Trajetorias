import { User } from "@modules/users/infra/typeorm/entities/User";
import { ICreateUser } from "../models/ICreateUser";
import { IUser } from "../models/IUser";

export interface IUserRepository {
    create(data: ICreateUser): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findByCPF(cpf: string): Promise<User | null>;

}