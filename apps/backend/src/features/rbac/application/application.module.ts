import { Module } from '@nestjs/common';

import { RolePersistenceModule } from 'infrastructure/persistence/adapters/role';

import { CreateRoleHandler } from './commands/create-role';
import { ReadRoleHandler } from './queries/read-role';
import { ReadRolesHandler } from './queries/read-roles';
import { BootstrapUseCase } from './use-cases/common/bootstrap';

@Module({
  imports: [RolePersistenceModule],
  providers: [
    // Common
    BootstrapUseCase,

    // Commands
    CreateRoleHandler,

    // Queries
    ReadRolesHandler,
    ReadRoleHandler,
  ],
  exports: [],
})
export class ApplicationModule {}
