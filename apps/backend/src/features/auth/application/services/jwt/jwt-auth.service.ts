import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthenticatedUser } from 'features/auth/domain/entities';

@Injectable()
export class JWTAuthService {
  constructor(@Inject(JwtService) private readonly jwtService: JwtService) {}

  public async generateToken(authenticatedUser: AuthenticatedUser) {
    return this.jwtService.sign(authenticatedUser.toJWTPayload(), {
      secret: 'some-secret',
    });
  }
}
