import { Controller, Get, Inject, Query } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { RolesQuery } from 'features/iam/application/queries/roles-query';

import { QueryRolesDto } from './dto';

@Controller('/v1/iam/roles')
export class QueryRolesController {
  constructor(
    @Inject(QueryBus)
    private readonly queryBus: QueryBus,
  ) {}

  @Get('/')
  async queryRoles(@Query() queryRolesDto: QueryRolesDto) {
    return this.queryBus.execute(new RolesQuery(queryRolesDto));
  }
}
