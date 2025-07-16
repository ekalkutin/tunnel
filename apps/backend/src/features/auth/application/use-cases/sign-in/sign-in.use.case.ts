import { Inject, Injectable } from '@nestjs/common';

import { JWTAuthService } from 'features/auth/application/services/jwt';
import { AuthenticatedUser } from 'features/auth/domain/entities';
import { AccountService } from 'features/iam/application/services/account';

type Input = {
  readonly username: string;
  readonly password: string;
};
@Injectable()
export class SignInUseCase {
  constructor(
    @Inject(JWTAuthService) private readonly jwtAuthService: JWTAuthService,
    @Inject(AccountService) private readonly accountService: AccountService,
  ) {}

  public async execute(input: Input) {
    const account =
      await this.accountService.findAccountWithPermissionsByUsername(
        input.username,
      );

    const authenticatedUser = new AuthenticatedUser(
      account.id,
      account.role.id,
      account.permissions,
    );

    const accessToken =
      await this.jwtAuthService.generateToken(authenticatedUser);
    return {
      accessToken,
    };
  }
}
