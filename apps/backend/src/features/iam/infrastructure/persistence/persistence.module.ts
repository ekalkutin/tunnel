import { Module } from '@nestjs/common';

import { AccountRepositoryPort } from 'features/iam/domain/account';
import { RoleRepositoryPort } from 'features/iam/domain/role';
import { DatabaseModule } from 'infrastructure/persistence/database';

import { AccountRepositoryAdapter } from './account-repository.adapter';
import { RoleRepositoryAdapter } from './role-repository.adapter';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: AccountRepositoryPort,
      useClass: AccountRepositoryAdapter,
    },
    {
      provide: RoleRepositoryPort,
      useClass: RoleRepositoryAdapter,
    },
  ],
  exports: [AccountRepositoryPort, RoleRepositoryPort],
})
export class IAMPersistenceModule {}
