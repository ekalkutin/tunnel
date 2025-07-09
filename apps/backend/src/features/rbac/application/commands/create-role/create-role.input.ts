export class CreateRoleInput {
  public readonly code: string;
  public readonly title?: string;
  public readonly permissions?: Array<string>;
}
