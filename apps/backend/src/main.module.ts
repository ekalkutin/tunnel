import { Module } from '@nestjs/common';

import { AuthModule } from 'features/auth';
import { IAMModule } from 'features/iam';
import { AppConfigModule } from 'infrastructure/config';
import { CQRSModule } from 'infrastructure/cqrs';

@Module({
  imports: [
    // Common Infrastructure
    AppConfigModule,
    CQRSModule,

    // Features
    IAMModule,
    AuthModule,
  ],
})
export class MainModule {}
