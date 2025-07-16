import { SystemPermission } from 'features/iam/domain/constants';

export class AuthenticatedUser {
  constructor(
    public readonly userId: string,
    public readonly roleId: string,
    public readonly permissions: SystemPermission[],
  ) {}

  public toJWTPayload() {
    return {
      id: this.userId,
      permissions: this.permissions,
    };
  }
}
