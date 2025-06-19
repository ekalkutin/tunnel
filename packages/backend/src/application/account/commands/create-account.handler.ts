import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Account } from 'domain/entities';
import { AccountRepositoryPort } from 'domain/ports/repositories';

import { CreateAccountCommand } from './create-account.command';

@CommandHandler(CreateAccountCommand)
export class CreateAccountHandler
  implements ICommandHandler<CreateAccountCommand>
{
  constructor(
    @Inject(AccountRepositoryPort)
    private readonly accountRepository: AccountRepositoryPort,
  ) {}

  async execute(command: CreateAccountCommand): Promise<Account> {
    const account = await this.accountRepository.save(command.data);
    return account;
  }
}
