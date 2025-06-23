export class Role {
  public readonly id: number;
  public readonly code: string;

  constructor(role: Role) {
    this.id = role.id;
    this.code = role.code;
  }
}
