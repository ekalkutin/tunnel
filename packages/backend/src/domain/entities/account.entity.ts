export class Account {
  public readonly id?: string;
  public email: string;
  public password: string;
  public roleId: string;

  constructor(data: Account) {
    this.id = data.id;
    this.email = data.email;
    this.password = data.password;
    this.roleId = data.roleId;
  }
}
