import { Module } from '@nestjs/common';

import { AuthApplicationModule } from '../application/application.module';

import { SignInController } from './rest/sign-in';

@Module({
  imports: [AuthApplicationModule],
  controllers: [SignInController],
})
export class AuthAPIModule {}
