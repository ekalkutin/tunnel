export class Role {
  public readonly id?: string;
  public readonly code: string;
  public readonly description: string;
  public readonly permissionIds: string[];

  constructor(data: Role) {
    this.id = data.id;
    this.code = data.code;
    this.description = data.description;
    this.permissionIds = data.permissionIds || [];
  }
}
