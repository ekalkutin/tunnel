import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Account, AccountRepositoryPort } from 'features/iam/domain/account';

import { CreateAccountCommand } from './create-account.command';

@CommandHandler(CreateAccountCommand)
export class CreateAccountHandler
  implements ICommandHandler<CreateAccountCommand>
{
  constructor(
    @Inject(AccountRepositoryPort)
    private readonly accountRepositoryPort: AccountRepositoryPort,
  ) {}

  public async execute(command: CreateAccountCommand): Promise<Account> {
    const account = Account.create({
      username: command.input.username,
      password: command.input.password,
      roleId: command.input.roleId,
    });

    return this.accountRepositoryPort.save(account);
  }
}
