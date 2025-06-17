import { Module } from '@nestjs/common';

import { AccountApplicationModule } from '../application/application.module';

import { CreateAccountsController, QueryAccountsController } from './rest';

@Module({
  imports: [AccountApplicationModule],
  controllers: [QueryAccountsController, CreateAccountsController],
})
export class AccountPresentationModule {}
