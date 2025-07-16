import { Module } from '@nestjs/common';

import { AuthAPIModule } from './api/api.module';
import { AuthInfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [AuthAPIModule, AuthInfrastructureModule],
})
export class AuthModule {}
