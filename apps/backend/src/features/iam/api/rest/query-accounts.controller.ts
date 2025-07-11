import { Controller, Get, Inject, Query } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { AccountsQuery } from 'features/iam/application/queries/accounts-query';

import { QueryAccountsDto } from './dto';

@Controller('/v1/iam/accounts')
export class QueryAccountsController {
  constructor(@Inject(QueryBus) private readonly queryBus: QueryBus) {}

  @Get('/')
  async queryAccounts(@Query() queryDto: QueryAccountsDto) {
    return this.queryBus.execute(new AccountsQuery(queryDto));
  }
}
