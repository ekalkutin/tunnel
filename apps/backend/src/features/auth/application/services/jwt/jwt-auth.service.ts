import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthenticatedUser } from 'features/auth/domain/entities';
import { SystemPermission } from 'features/iam/domain/constants';
import { AppConfigService } from 'infrastructure/config';

@Injectable()
export class JWTAuthService {
  private readonly APP_CRYPTO_SALT: string;

  constructor(
    @Inject(AppConfigService)
    private readonly appConfigService: AppConfigService,
    @Inject(JwtService) private readonly jwtService: JwtService,
  ) {
    this.APP_CRYPTO_SALT = appConfigService.APP_CRYPTO_SALT;
  }

  public async sign(authenticatedUser: AuthenticatedUser) {
    return this.jwtService.sign(authenticatedUser.toJWTPayload(), {
      secret: this.APP_CRYPTO_SALT,
    });
  }

  public async verifyAndDecodeToken(token: string): Promise<AuthenticatedUser> {
    const payload = await this.jwtService.verifyAsync<{
      id: string;
      roleId: string;
      permissions: SystemPermission[];
    }>(token, {
      secret: this.APP_CRYPTO_SALT,
    });

    const authenticatedUser = new AuthenticatedUser(
      payload.id,
      payload.roleId,
      payload.permissions,
    );

    return authenticatedUser;
  }
}
