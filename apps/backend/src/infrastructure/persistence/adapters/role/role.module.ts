import { Module } from '@nestjs/common';

import { RoleRepositoryPort } from 'domain/ports';
import { DatabaseModule } from 'infrastructure/persistence/database';

import { RoleRepositoryAdapter } from './role.adapter';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: RoleRepositoryPort,
      useClass: RoleRepositoryAdapter,
    },
  ],
  exports: [RoleRepositoryPort],
})
export class RolePersistenceModule {}
