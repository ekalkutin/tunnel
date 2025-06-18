import { Module } from '@nestjs/common';

import { AccountModule } from 'features/account';
import { TunnelModule } from 'features/tunnel';
import { AppConfigModule } from 'infrastructure/config';
import { DatabaseModule } from 'infrastructure/database';

@Module({
  imports: [AppConfigModule, DatabaseModule, AccountModule, TunnelModule],
})
export class MainModule {}
