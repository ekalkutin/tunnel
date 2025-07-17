import { Module } from '@nestjs/common';

import { IAMPersistenceModule } from '../infrastructure/persistence';

import { CreateAccountHandler } from './commands/create-account';
import { CreateRoleHandler } from './commands/create-role';
import { AccountQueryHandler } from './queries/account-query';
import { AccountsQueryHandler } from './queries/accounts-query';
import { RoleQueryHandler } from './queries/role-query';
import { RolesQueryHandler } from './queries/roles-query';
import { IAMService } from './services/account/iam.service';
import {
  CreateAccountUseCase,
  CreateRoleUseCase,
  QueryAccountsUseCase,
  QueryRolesUseCase,
} from './use-cases';

@Module({
  imports: [IAMPersistenceModule],
  providers: [
    // Accounts
    CreateAccountUseCase,
    CreateAccountHandler,
    IAMService,

    QueryAccountsUseCase,
    AccountsQueryHandler,
    AccountQueryHandler,

    // Roles
    CreateRoleUseCase,
    QueryRolesUseCase,
    CreateRoleHandler,
    RolesQueryHandler,
    RoleQueryHandler,
  ],
  exports: [
    // Accounts
    CreateAccountUseCase,
    QueryAccountsUseCase,
    IAMService,

    // Roles
    CreateRoleUseCase,
    QueryRolesUseCase,
  ],
})
export class IAMApplicationModule {}
