import { Module } from '@nestjs/common';

import { IAMPersistenceModule } from '../infrastructure/persistence';

import { CreateAccountHandler } from './commands/create-account';
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

    // Roles
    CreateRoleUseCase,
  ],
  exports: [
    // Accounts
    CreateAccountHandler,
    CreateAccountUseCase,

    QueryAccountsUseCase,

    // Roles
    CreateRoleUseCase,
  ],
})
export class IAMApplicationModule {}
