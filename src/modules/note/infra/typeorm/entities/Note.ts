import { Psychologists } from 'modules/psychologists/infra/typeorm/entities/Psychologists';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity('notes')
export class Note {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @ManyToOne(() => Service, service => service.notes)
  service: Service;

  @ManyToOne(() => Psychologists)
  author: Psychologists;

  @CreateDateColumn()
  createdAt: Date;
}
