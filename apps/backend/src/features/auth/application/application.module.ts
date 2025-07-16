import { Module } from '@nestjs/common';

import { IAMApplicationModule } from 'features/iam/application/application.module';

import { JWTAuthService } from './services/jwt';
import { SignInUseCase } from './use-cases/sign-in';

@Module({
  imports: [IAMApplicationModule],
  providers: [JWTAuthService, SignInUseCase],
  exports: [JWTAuthService, SignInUseCase],
})
export class AuthApplicationModule {}
