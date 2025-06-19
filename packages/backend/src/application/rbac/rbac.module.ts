import { Module } from '@nestjs/common';

import { PermissionPersistenceModule } from 'infrastructure/persistence/permission';
import { RolePersistenceModule } from 'infrastructure/persistence/role';

import { CreatePermissionHandler, CreateRoleHandler } from './commands';
import { PermissionQueryHandler, RoleQueryHandler } from './queries';

@Module({
  imports: [RolePersistenceModule, PermissionPersistenceModule],
  providers: [
    // Permissions
    CreatePermissionHandler,
    PermissionQueryHandler,
    RoleQueryHandler,
    // Roles
    CreateRoleHandler,
    RoleQueryHandler,
  ],
})
export class RBACApplicationModule {}
