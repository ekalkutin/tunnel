import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Account, AccountRepositoryPort } from 'features/iam/domain/account';

import { AccountsQuery } from './accounts.query';

@QueryHandler(AccountsQuery)
export class AccountsQueryHandler implements IQueryHandler<AccountsQuery> {
  constructor(
    @Inject(AccountRepositoryPort)
    private readonly accountRepository: AccountRepositoryPort,
  ) {}

  public execute(query: AccountsQuery): Promise<Account[]> {
    return this.accountRepository.query(query.options);
  }
}
