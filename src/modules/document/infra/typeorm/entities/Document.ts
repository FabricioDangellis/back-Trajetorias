import { Patient } from 'modules/patient/infra/typeorm/entities/Patient';
import { Service } from 'modules/services/infra/typeorm/entities/Service';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity('documents')
export class Document {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fileName: string;

  @Column()
  mimeType: string;

  @Column('bytea')
  data: Buffer;

  @ManyToOne(() => Service, service => service.documents)
  service: Service;

  @ManyToOne(() => Patient)
  patient: Patient;

  @CreateDateColumn()
  createdAt: Date;
}
