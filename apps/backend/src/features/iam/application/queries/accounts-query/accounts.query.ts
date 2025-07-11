import { Query } from '@nestjs/cqrs';

import { Account, QueryOptions } from 'features/iam/domain/account';

export class AccountsQuery extends Query<Account[]> {
  constructor(public readonly options?: QueryOptions) {
    super();
  }
}
