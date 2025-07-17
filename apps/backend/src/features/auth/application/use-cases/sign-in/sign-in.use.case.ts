import { createHash } from 'crypto';

import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';

import { JWTAuthService } from 'features/auth/application/services/jwt';
import { AuthenticatedUser } from 'features/auth/domain/entities';
import { IAMService } from 'features/iam/application/services/account';
import { AppConfigService } from 'infrastructure/config';

type Input = {
  readonly username: string;
  readonly password: string;
};
@Injectable()
export class SignInUseCase {
  constructor(
    @Inject(AppConfigService)
    private readonly appConfigService: AppConfigService,
    @Inject(JWTAuthService) private readonly jwtAuthService: JWTAuthService,
    @Inject(IAMService)
    private readonly iamService: IAMService,
  ) {}

  public async execute(input: Input) {
    const account = await this.iamService.getAccountByUsername(input.username);

    if (!this.isPasswordValid(input.password, account.password)) {
      throw new UnauthorizedException();
    }

    const authenticatedUser = new AuthenticatedUser(
      account.id,
      account.role.id,
      account.permissions,
    );

    const accessToken = await this.jwtAuthService.sign(authenticatedUser);
    return {
      accessToken,
    };
  }

  private isPasswordValid(
    inputPassword: string,
    accountPassword: string,
  ): boolean {
    const hashedInputPassword = createHash('sha256')
      .update(inputPassword + this.appConfigService.APP_CRYPTO_SALT)
      .digest('hex');

    return hashedInputPassword === accountPassword;
  }
}
