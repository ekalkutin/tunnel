import { Inject, Injectable } from '@nestjs/common';

import { JWTAuthService } from 'features/auth/application/services/jwt';
import { AuthenticatedUser } from 'features/auth/domain/entities';
import { IAMService } from 'features/iam/application/services/account';

type Input = {
  readonly username: string;
  readonly password: string;
};
@Injectable()
export class SignInUseCase {
  constructor(
    @Inject(JWTAuthService) private readonly jwtAuthService: JWTAuthService,
    @Inject(IAMService)
    private readonly iamService: IAMService,
  ) {}

  public async execute(input: Input) {
    const account = await this.iamService.findUserByCredentials(
      input.username,
      input.password,
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
