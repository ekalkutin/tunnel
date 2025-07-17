import { Global, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';

import { JWTAuthService } from '../application/services/jwt';

@Global()
@Module({
  imports: [JwtModule],
  providers: [JwtService, JWTAuthService],
  exports: [JwtService, JWTAuthService],
})
export class AuthInfrastructureModule {}
