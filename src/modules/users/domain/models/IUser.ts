export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    type: 'psicologo' | 'responsavel';
    birthDate: Date;
    cpf: string;
    createdAt: Date;
    deletedAt: Date;
  }
  