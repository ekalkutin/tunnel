import { Module } from '@nestjs/common';

import { GetRolesController } from './get-roles.controller';

@Module({
  controllers: [GetRolesController],
})
export class RBACRESTModule {}
