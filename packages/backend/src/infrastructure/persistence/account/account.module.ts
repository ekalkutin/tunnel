import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AccountRepositoryPort } from 'domain/ports/repositories';

import { DatabaseModule } from '../database';

import { AccountRepositoryAdapter } from './account.adapter';
import { AccountModel, AccountSchema } from './account.model';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([
      {
        name: AccountModel.name,
        schema: AccountSchema,
      },
    ]),
  ],
  providers: [
    {
      provide: AccountRepositoryPort,
      useClass: AccountRepositoryAdapter,
    },
  ],
  exports: [AccountRepositoryPort],
})
export class AccountPersistenceModule {}
