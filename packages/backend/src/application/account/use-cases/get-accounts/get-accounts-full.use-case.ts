import { Inject, Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { PermissionsQuery, RolesQuery } from 'application/rbac/queries';
import { QueryAccountsDto } from 'domain/dtos/account';

import { AccountsQuery } from '../../queries';

@Injectable()
export class GetAccountsFullUseCase {
  constructor(@Inject(QueryBus) private readonly queryBus: QueryBus) {}

  async execute(query: QueryAccountsDto) {
    const [roles, permissions] = await Promise.all([
      await this.queryBus.execute(new RolesQuery()),
      await this.queryBus.execute(new PermissionsQuery()),
    ]);

    const accounts = await this.queryBus.execute(new AccountsQuery(query));

    return accounts.map(({ email, roleId }) => {
      return {
        email,
        role: roles
          .filter(({ id }) => roleId === id)
          .map(role => {
            return {
              code: role.code,
              description: role.description,
              permissions: permissions
                .filter(permission =>
                  role.permissionIds.includes(permission.id!),
                )
                .map(permission => {
                  return {
                    code: permission.code,
                    description: permission.description,
                  };
                }),
            };
          }),
      };
    });
  }
}
