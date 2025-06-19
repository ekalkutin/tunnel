import { Controller, Get, Inject, Query } from '@nestjs/common';

import {
  GetAccountsBaseUseCase,
  GetAccountsFullUseCase,
} from 'application/account/use-cases/get-accounts';
import { QueryAccountsDto } from 'domain/dtos/account';

@Controller('/v1/accounts')
export class GetAccountsController {
  constructor(
    @Inject(GetAccountsBaseUseCase)
    private readonly queryAccountsBaseUseCase: GetAccountsBaseUseCase,

    @Inject(GetAccountsFullUseCase)
    private readonly queryAccountsFullUseCase: GetAccountsFullUseCase,
  ) {}

  @Get('/')
  async searchAccounts(@Query() query: QueryAccountsDto) {
    const { full } = query;

    if (!full) {
      return this.queryAccountsBaseUseCase.execute(query);
    } else {
      return this.queryAccountsFullUseCase.execute(query);
    }
  }
}
