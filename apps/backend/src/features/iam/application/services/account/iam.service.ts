import { Inject, Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { AccountQuery } from '../../queries/account-query';
import { RoleQuery } from '../../queries/role-query';

@Injectable()
export class IAMService {
  constructor(@Inject(QueryBus) private readonly queryBus: QueryBus) {}

  public async getAccountByUsername(username: string) {
    const account = await this.queryBus.execute(
      new AccountQuery({
        username,
      }),
    );

    const role = await this.queryBus.execute(
      new RoleQuery({ id: account.role.id }),
    );

    return {
      ...account,
      permissions: role.permissions,
    };
  }
}
