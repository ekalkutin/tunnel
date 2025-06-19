export class Permission {
  public readonly id?: string;
  public readonly code: string;
  public readonly description: string;

  constructor(data: Permission) {
    this.id = data.id;
    this.code = data.code;
    this.description = data.description;
  }
}
