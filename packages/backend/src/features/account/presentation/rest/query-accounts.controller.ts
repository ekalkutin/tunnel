import { Controller, Get, Inject, Query } from '@nestjs/common';

import { QueryAccountsUseCase } from 'features/account/application/use-cases';
import { QueryAccountsDto } from 'features/account/domain/dto';

@Controller('/v1/accounts')
export class QueryAccountsController {
  constructor(
    @Inject(QueryAccountsUseCase)
    private readonly queryAccounts: QueryAccountsUseCase,
  ) {}

  @Get('/')
  async query(@Query() query: QueryAccountsDto) {
    return this.queryAccounts.execute(query);
  }
}
