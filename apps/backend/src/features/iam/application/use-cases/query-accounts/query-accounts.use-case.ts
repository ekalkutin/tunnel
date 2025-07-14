import { Inject, Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { AccountsQuery } from '../../queries/accounts-query';

type Input = {
  readonly username?: string;
};

@Injectable()
export class QueryAccountsUseCase {
  constructor(@Inject(QueryBus) private readonly queryBus: QueryBus) {}

  public async execute(input: Input) {
    const accounts = await this.queryBus.execute(new AccountsQuery(input));
    return accounts;
  }
}
