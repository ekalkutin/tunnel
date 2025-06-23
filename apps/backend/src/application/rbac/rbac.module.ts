import { Module } from '@nestjs/common';

import { RolePersistenceModule } from 'infrastructure/persistence/adapters/role';

import { CreateRoleHandler } from './commands/create-role';
import { ReadRoleHandler } from './queries/read-role';
import { ReadRolesQuery } from './queries/read-roles';

@Module({
  imports: [RolePersistenceModule],
  providers: [
    // RBAC
    CreateRoleHandler,
    ReadRoleHandler,
    ReadRolesQuery,
  ],
})
export class RBACApplicationModule {}
