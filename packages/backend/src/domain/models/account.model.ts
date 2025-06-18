import { Role } from './role.model';

export class Account {
  public id: string;
  public email: string;
  public password: string;
  public role: Role;

  constructor() {}
}
