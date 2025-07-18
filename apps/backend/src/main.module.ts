import { Module } from '@nestjs/common';

import { AuthModule } from 'features/auth';
import { DeviceModule } from 'features/device';
import { IAMModule } from 'features/iam';
import { AppConfigModule } from 'infrastructure/config';
import { CQRSModule } from 'infrastructure/cqrs';
import { DatabaseModule } from 'infrastructure/persistence/database';

@Module({
  imports: [
    // Common Infrastructure
    AppConfigModule,
    CQRSModule,
    DatabaseModule,

    // Features
    IAMModule,
    AuthModule,
    DeviceModule,
  ],
})
export class MainModule {}
