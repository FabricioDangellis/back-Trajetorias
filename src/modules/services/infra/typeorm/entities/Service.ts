import { Document } from "modules/document/infra/typeorm/entities/Document";
import { Note } from "modules/note/infra/typeorm/entities/Note";
import { Patient } from "modules/patient/infra/typeorm/entities/Patient";
import { Psychologists } from "modules/psychologists/infra/typeorm/entities/Psychologists";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => Note, note => note.service, { cascade: true })
    notes: Note[];

    @OneToMany(() => Document, document => document.service, { cascade: true })
    documents: Document[];

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}