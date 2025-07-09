import { Module } from '@nestjs/common';

import { ApplicationModule } from 'features/rbac/application';

import { CreateRoleController } from './create-role';
import { QueryRolesController } from './query-roles';

@Module({
  imports: [ApplicationModule],
  controllers: [CreateRoleController, QueryRolesController],
})
export class RESTModule {}
