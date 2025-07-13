import { Module } from '@nestjs/common';

import { IAMApplicationModule } from '../application/application.module';

import { CreateAccountController } from './rest/create-account';
import { CreateRoleController } from './rest/create-role';
import { QueryAccountsController } from './rest/query-accounts';

@Module({
  imports: [IAMApplicationModule],
  controllers: [
    // Accounts
    CreateAccountController,
    QueryAccountsController,

    // Roles
    CreateRoleController,
  ],
})
export class IAMAPIModule {}
