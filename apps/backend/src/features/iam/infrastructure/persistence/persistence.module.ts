import { Module } from '@nestjs/common';

import { AccountRepository, RoleRepository } from 'features/iam/domain';
import { DatabaseModule } from 'infrastructure/persistence/database';

import { AccountRepositoryAdapter } from './account';
import { RoleRepositoryAdapter } from './role';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: AccountRepository,
      useClass: AccountRepositoryAdapter,
    },
    {
      provide: RoleRepository,
      useClass: RoleRepositoryAdapter,
    },
  ],
  exports: [DatabaseModule, AccountRepository, RoleRepository],
})
export class IAMPersistenceModule {}
