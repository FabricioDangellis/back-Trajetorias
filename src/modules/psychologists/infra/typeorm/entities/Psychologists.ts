import { User } from '../../../../users/infra/typeorm/entities/User';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('psychologists')
export class Psychologists {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    specialty: string;

    @Column({unique:true})
    crv: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}