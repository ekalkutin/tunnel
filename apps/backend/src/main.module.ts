import { Module } from '@nestjs/common';

import { AppConfigModule } from 'infrastructure/config';
import { CQRSModule } from 'infrastructure/cqrs';

@Module({
  imports: [
    // Common Infra
    AppConfigModule,
    CQRSModule,

    // Features
  ],
})
export class MainModule {}
