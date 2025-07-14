import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Account, AccountRepository } from 'features/iam/domain';

import { CreateAccountCommand } from './create-account.command';

@CommandHandler(CreateAccountCommand)
export class CreateAccountHandler
  implements ICommandHandler<CreateAccountCommand>
{
  constructor(
    @Inject(AccountRepository)
    private readonly accountRepository: AccountRepository,
  ) {}

  public async execute(command: CreateAccountCommand): Promise<Account> {
    const account = Account.create({
      username: command.input.username,
      password: command.input.password,
      roleId: command.input.roleId,
    });

    return this.accountRepository.save(account);
  }
}
