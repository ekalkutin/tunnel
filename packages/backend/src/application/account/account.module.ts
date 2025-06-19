import { Module } from '@nestjs/common';

import { AccountPersistenceModule } from 'infrastructure/persistence/account';
import { PermissionPersistenceModule } from 'infrastructure/persistence/permission';
import { RolePersistenceModule } from 'infrastructure/persistence/role';

import { CreateAccountHandler } from './commands';
import { AccountsQueryHandler } from './queries';
import {
  GetAccountsBaseUseCase,
  GetAccountsFullUseCase,
} from './use-cases/get-accounts';

@Module({
  imports: [
    AccountPersistenceModule,
    RolePersistenceModule,
    PermissionPersistenceModule,
  ],
  providers: [
    // Use cases
    GetAccountsBaseUseCase,
    GetAccountsFullUseCase,
    // Handlers
    CreateAccountHandler,
    AccountsQueryHandler,
  ],
  exports: [GetAccountsBaseUseCase, GetAccountsFullUseCase],
})
export class AccountApplicationModule {}
