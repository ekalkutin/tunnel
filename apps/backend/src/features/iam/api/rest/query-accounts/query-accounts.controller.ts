import { Controller, Get, Inject, Query } from '@nestjs/common';

import { QueryAccountsUseCase } from 'features/iam/application/use-cases';

import { QueryAccountsDto } from './query-accounts.dto';

@Controller('/v1/iam/accounts')
export class QueryAccountsController {
  constructor(
    @Inject(QueryAccountsUseCase)
    private readonly queryAccountsUseCase: QueryAccountsUseCase,
  ) {}

  @Get('/')
  async queryAccounts(@Query() queryDto: QueryAccountsDto) {
    return this.queryAccountsUseCase.execute(queryDto);
  }
}
