import { Module } from '@nestjs/common';

import { DatabaseModule } from 'infrastructure/persistence/database';

import {
  CreateAccountController,
  QueryAccountsController,
  UpdateRoleController,
} from './api/rest';
import { CreateRoleController } from './api/rest/create-role.controller';
import { QueryRolesController } from './api/rest/query-roles.controller';
import { CreateAccountHandler } from './application/commands/create-account';
import { CreateRoleHandler } from './application/commands/create-role';
import { UpdateRoleHandler } from './application/commands/update-role';
import { AccountsQueryHandler } from './application/queries/accounts-query';
import { RoleQueryHandler } from './application/queries/role-query';
import { RolesQueryHandler } from './application/queries/roles-query';
import { CreateAccountUseCase } from './application/use-cases/create-account';
import { AccountRepositoryPort } from './domain/account';
import { RoleRepositoryPort } from './domain/role';
import {
  AccountRepositoryAdapter,
  RoleRepositoryAdapter,
} from './infrastructure/persistence';

@Module({
  imports: [
    // Infrastructure
    DatabaseModule,
  ],
  controllers: [
    // Account
    CreateAccountController,
    QueryAccountsController,

    // Role
    CreateRoleController,
    QueryRolesController,
    UpdateRoleController,
  ],
  providers: [
    // Use cases
    CreateAccountUseCase,

    // CQRS
    CreateAccountHandler,
    AccountsQueryHandler,

    CreateRoleHandler,
    UpdateRoleHandler,
    RoleQueryHandler,
    RolesQueryHandler,

    // Repositories
    {
      provide: AccountRepositoryPort,
      useClass: AccountRepositoryAdapter,
    },
    {
      provide: RoleRepositoryPort,
      useClass: RoleRepositoryAdapter,
    },
  ],
  exports: [],
})
export class IAMModule {}
