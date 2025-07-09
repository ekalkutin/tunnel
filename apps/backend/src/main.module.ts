import { Module } from '@nestjs/common';

import { AppConfigModule } from 'infrastructure/config';
import { CQRSModule } from 'infrastructure/cqrs';

import { RBACModule } from './features/rbac/rbac.module';

@Module({
  imports: [AppConfigModule, CQRSModule, RBACModule],
})
export class MainModule {}
