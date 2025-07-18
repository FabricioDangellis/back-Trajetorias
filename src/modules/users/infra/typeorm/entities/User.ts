import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    BeforeInsert,
  } from 'typeorm';
  
  export type UserType = 'psicologo' | 'responsavel';
  
  @Entity('users')
  export class User {
      @PrimaryGeneratedColumn('uuid')
      id: string;
    
      @Column()
      name: string;
    
      @Column({ unique: true })
      email: string;
    
      @Column()
      password: string;
    
      @Column({ type: 'enum', enum: ['psicologo', 'responsavel'] })
      type: UserType;
    
      @Column({ type: 'date' })
      birthDate: Date;
    
      @Column({ unique: true })
      cpf: string;
    
      @CreateDateColumn()
      createdAt: Date;
    
      @DeleteDateColumn()
      deletedAt: Date;
  }
  