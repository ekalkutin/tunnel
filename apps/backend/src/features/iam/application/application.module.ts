import { Module } from '@nestjs/common';

import { IAMPersistenceModule } from '../infrastructure/persistence';

import { CreateAccountHandler } from './commands/create-account';
import { AccountsQueryHandler } from './queries/accounts-query';
import {
  CreateAccountUseCase,
  CreateRoleUseCase,
  QueryAccountsUseCase,
} from './use-cases';

@Module({
  imports: [IAMPersistenceModule],
  providers: [
    // Accounts
    CreateAccountUseCase,
    CreateAccountHandler,

    QueryAccountsUseCase,
    AccountsQueryHandler,

    // Roles
    CreateRoleUseCase,
  ],
  exports: [
    // Accounts
    CreateAccountHandler,
    CreateAccountUseCase,

    QueryAccountsUseCase,
    AccountsQueryHandler,

    // Roles
    CreateRoleUseCase,
  ],
})
export class IAMApplicationModule {}
