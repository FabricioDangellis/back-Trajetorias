import { Patient } from "modules/patient/infra/typeorm/entities/Patient";
import { Psychologists } from "modules/psychologists/infra/typeorm/entities/Psychologists";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('services')
export class Service {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Patient)
    patient: Patient;

    @ManyToOne(() => Psychologists)
    psycologist: Psychologists;

    @Column('timestamp')
    startTime: Date;

    @Column('timestamp')
    endTime: Date;

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}