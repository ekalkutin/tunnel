import { Role } from 'features/rbac/domain/models';

export class Account {
  public id: string;
  public email: string;
  public password: string;
  public role: Role;

  constructor() {}
}
