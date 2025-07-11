import { Inject, Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { Account } from 'features/iam/domain/account';
import { Role } from 'features/iam/domain/role';

import { CreateAccountCommand } from '../../commands/create-account';
import { RoleQuery } from '../../queries/role-query';

type Input = {
  readonly username: string;
  readonly password: string;
  readonly roleId?: string;
};

@Injectable()
export class CreateAccountUseCase {
  constructor(
    @Inject(QueryBus) private readonly queryBus: QueryBus,
    @Inject(CommandBus) private readonly commandBus: CommandBus,
  ) {}

  public async execute(input: Input): Promise<Account> {
    let role!: Role;

    if (!input.roleId) {
      role = await this.queryBus.execute(new RoleQuery({ code: 'DEFAULT' }));
    }

    const account = await this.commandBus.execute(
      new CreateAccountCommand({
        username: input.username,
        password: input.password,
        roleId: input.roleId || role.id,
      }),
    );

    return account;
  }
}
