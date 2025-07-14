import { v4 } from 'uuid';

export class Account {
  private constructor(
    public readonly id: string,
    public username: string,
    public password: string,
    public roleId: string,
  ) {}

  public assignRole(roleId: string) {
    this.roleId = roleId;
  }

  public static create(props: {
    id?: string;
    username: string;
    password: string;
    roleId: string;
  }): Account {
    return new Account(
      props.id || v4(),
      props.username,
      props.password,
      props.roleId,
    );
  }
}
