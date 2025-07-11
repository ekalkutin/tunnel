import { v4 } from 'uuid';

export class Account {
  public readonly id: string;
  public password: string;
  public username: string;

  private constructor(props: Account) {
    this.id = props.id || v4();
    this.username = props.username;
    this.password = props.password;
  }

  static create(props: Omit<Account, 'id'> & { id?: string }): Account {
    return new Account({
      id: props.id || v4(),
      username: props.username,
      password: props.password,
    });
  }

  static toPersistence(account: Account) {
    return {
      id: account.id,
      username: account.username,
      password: account.password,
    };
  }
}
