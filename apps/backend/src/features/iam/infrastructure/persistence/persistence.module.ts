import { Module } from '@nestjs/common';

import { AccountRepository, RoleRepository } from 'features/iam/domain';

import { AccountRepositoryAdapter } from './account';
import { RoleRepositoryAdapter } from './role';

@Module({
  imports: [],
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
  exports: [AccountRepository, RoleRepository],
})
export class IAMPersistenceModule {}
