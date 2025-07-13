import { Inject, Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { Account } from 'features/iam/domain/account';

import { CreateAccountCommand } from '../../commands/create-account';

type Input = {
  readonly username: string;
  readonly password: string;
  readonly roleId: string;
};

@Injectable()
export class CreateAccountUseCase {
  constructor(@Inject(CommandBus) private readonly commandBus: CommandBus) {}

  public async execute(input: Input): Promise<Account> {
    const account = await this.commandBus.execute(
      new CreateAccountCommand(input),
    );

    return account;
  }
}
