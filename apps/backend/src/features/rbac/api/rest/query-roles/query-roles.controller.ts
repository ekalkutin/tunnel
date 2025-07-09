import { Controller, Get, Inject } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { ReadRolesQuery } from 'features/rbac/application/queries/read-roles';

@Controller('/v1/rbac/roles')
export class QueryRolesController {
  constructor(@Inject(QueryBus) private readonly queryBus: QueryBus) {}

  @Get('/')
  async queryRoles() {
    return this.queryBus.execute(new ReadRolesQuery({}));
  }
}
