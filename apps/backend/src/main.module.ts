import { Module } from '@nestjs/common';

import { AuthModule } from 'features/auth';
import { DeviceModule } from 'features/device';
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
    DeviceModule,
  ],
})
export class MainModule {}
