import { Controller, Get, Inject, Query } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { RolesQuery } from 'application/rbac/queries';
import { QueryRolesDto } from 'domain/dtos/role';

@Controller('/v1/rbac/roles')
export class GetRolesController {
  constructor(@Inject(QueryBus) private readonly queryBus: QueryBus) {}

  @Get('/')
  async roleQuery(@Query() query: QueryRolesDto) {
    return this.queryBus.execute(new RolesQuery(query));
  }
}
