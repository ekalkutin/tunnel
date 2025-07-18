import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';

import { JWTAuthService } from 'features/auth/application/services/jwt';
import { AuthenticatedUser } from 'features/auth/domain/entities';
import {
  HashPasswordService,
  IAMService,
} from 'features/iam/application/services/account';

type Input = {
  readonly username: string;
  readonly password: string;
};
@Injectable()
export class SignInUseCase {
  constructor(
    @Inject(HashPasswordService)
    private readonly hashPasswordService: HashPasswordService,
    @Inject(JWTAuthService) private readonly jwtAuthService: JWTAuthService,
    @Inject(IAMService)
    private readonly iamService: IAMService,
  ) {}

  public async execute(input: Input) {
    try {
      const account = await this.iamService.getAccountByUsername(
        input.username,
      );

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
    } catch (error) {
      void error;
      throw new UnauthorizedException();
    }
  }

  private isPasswordValid(
    inputPassword: string,
    accountPassword: string,
  ): boolean {
    const hashedInputPassword =
      this.hashPasswordService.hashPassword(inputPassword);

    return hashedInputPassword === accountPassword;
  }
}
