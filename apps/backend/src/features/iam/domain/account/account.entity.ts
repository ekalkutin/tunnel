import { v4 } from 'uuid';

import { Role } from '../role';

export class Account {
  public readonly id: string;
  public password: string;
  public username: string;
  public roleId: string;
  public role?: Role;

  private constructor(props: Account) {
    this.id = props.id || v4();
    this.username = props.username;
    this.password = props.password;
    this.roleId = props.roleId;
    this.role = props.role;
  }

  static create(props: Omit<Account, 'id'> & { id?: string }): Account {
    return new Account({
      id: props.id || v4(),
      username: props.username,
      password: props.password,
      roleId: props.roleId,
      role: props.role,
    });
  }

  static toPersistence(account: Account) {
    return {
      id: account.id,
      username: account.username,
      password: account.password,
      roleId: account.roleId,
    };
  }
}
