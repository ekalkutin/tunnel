import { Inject, Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { QueryAccountsDto } from 'domain/dtos/account';

import { AccountsQuery } from '../../queries';

@Injectable()
export class GetAccountsBaseUseCase {
  constructor(@Inject(QueryBus) private readonly queryBus: QueryBus) {}

  async execute(query: QueryAccountsDto) {
    const accounts = await this.queryBus.execute(new AccountsQuery(query));

    return accounts.map(account => {
      return {
        email: account.email,
      };
    });
  }
}
