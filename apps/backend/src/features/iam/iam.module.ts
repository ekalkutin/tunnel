import { Module } from '@nestjs/common';

import { AccountsController } from './api/accounts.controller';

@Module({
  controllers: [AccountsController],
})
export class IAMModule {}
