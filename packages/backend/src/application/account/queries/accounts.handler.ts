import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { AccountDto } from 'domain/dtos/account';
import { AccountRepositoryPort } from 'domain/ports/repositories';

import { AccountsQuery } from './accounts.query';

@QueryHandler(AccountsQuery)
export class AccountsQueryHandler
  implements IQueryHandler<AccountsQuery, AccountDto[]>
{
  constructor(
    @Inject(AccountRepositoryPort)
    private readonly accountRepository: AccountRepositoryPort,
  ) {}

  async execute(query: AccountsQuery) {
    return this.accountRepository.query(query.dto);
  }
}
