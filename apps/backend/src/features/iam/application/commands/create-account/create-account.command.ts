import { Command } from '@nestjs/cqrs';

import { Account } from 'features/iam/domain/account';

export class CreateAccountCommand extends Command<Account> {
  constructor(
    public readonly username: string,
    public readonly password: string,
  ) {
    super();
  }
}
