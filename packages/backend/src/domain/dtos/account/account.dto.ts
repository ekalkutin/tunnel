import { Account, Permission, Role } from 'domain/entities';

export class AccountDto {
  public readonly email: string;
  public readonly role: Pick<Role, 'code' | 'description'>;
  public readonly permissions: Pick<Permission, 'code' | 'description'>[];

  constructor(account: Account, role: Role, permissions: Permission[]) {
    this.email = account.email;
    this.role = {
      code: role.code,
      description: role.description,
    };
    this.permissions = permissions.map(permission => {
      return {
        code: permission.code,
        description: permission.description,
      };
    });
  }
}
