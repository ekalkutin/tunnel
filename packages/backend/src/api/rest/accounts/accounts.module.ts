import { Module } from '@nestjs/common';

import { AccountApplicationModule } from 'application/account/account.module';

import { GetAccountsController } from './get-accounts.controller';

@Module({
  imports: [AccountApplicationModule],
  controllers: [GetAccountsController],
})
export class AccountsRESTModule {}
