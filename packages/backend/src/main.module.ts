import { Module } from '@nestjs/common';

import { AccountModule } from 'features/account';
import { AppConfigModule } from 'infrastructure/config';
import { DatabaseModule } from 'infrastructure/database';

@Module({
  imports: [AppConfigModule, DatabaseModule, AccountModule],
})
export class MainModule {}
