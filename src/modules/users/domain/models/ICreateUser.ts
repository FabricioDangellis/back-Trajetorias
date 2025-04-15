export interface ICreateUser {
    name: string;
    email: string;
    password: string;
    type: 'psicologo' | 'responsavel';
    birthDate: Date;
    cpf: string;
  }
  