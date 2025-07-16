import { Controller, Get, Inject, Query } from '@nestjs/common';

import { QueryAccountsUseCase } from 'features/iam/application/use-cases';
import { PERMISSIONS } from 'features/iam/domain/constants';
import { RequirePermission } from 'src/shared/decorators';

import { QueryAccountsDto } from './query-accounts.dto';

@Controller('/v1/iam/accounts')
export class QueryAccountsController {
  constructor(
    @Inject(QueryAccountsUseCase)
    private readonly queryAccountsUseCase: QueryAccountsUseCase,
  ) {}

  @Get('/')
  @RequirePermission(PERMISSIONS.ACCOUNT_READ)
  async queryAccounts(@Query() queryDto: QueryAccountsDto) {
    return this.queryAccountsUseCase.execute(queryDto);
  }
}
