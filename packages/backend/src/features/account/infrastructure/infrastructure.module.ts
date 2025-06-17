import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AccountRepositoryPort } from '../domain/ports';

import { AccountRepositoryAdapter } from './adapters/persistence';
import {
  AccountEntity,
  AccountSchema,
} from './adapters/persistence/account.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AccountEntity.name,
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
export class AccountInfrastructureModule {}
