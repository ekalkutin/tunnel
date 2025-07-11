import { Module } from '@nestjs/common';

import { DatabaseModule } from 'infrastructure/persistence/database';

import { CreateAccountController, QueryAccountsController } from './api/rest';
import { CreateAccountHandler } from './application/commands/create-account';
import { AccountsQueryHandler } from './application/queries/accounts-query';
import { AccountRepositoryPort } from './domain/account';
import { AccountRepositoryAdapter } from './infrastructure/persistence';

@Module({
  imports: [
    // Infrastructure
    DatabaseModule,
  ],
  controllers: [
    // Account
    CreateAccountController,
    QueryAccountsController,
  ],
  providers: [
    // CQRS
    AccountsQueryHandler,
    CreateAccountHandler,

    // Repositories
    {
      provide: AccountRepositoryPort,
      useClass: AccountRepositoryAdapter,
    },
  ],
  exports: [],
})
export class IAMModule {}
