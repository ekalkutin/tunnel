import { Query } from '@nestjs/cqrs';

import { QueryAccountsDto } from 'domain/dtos/account';
import { Account } from 'domain/entities';

export class AccountsQuery extends Query<Account[]> {
  constructor(public readonly dto: QueryAccountsDto) {
    super();
  }
}
