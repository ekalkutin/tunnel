import { Command } from '@nestjs/cqrs';

import { Account } from 'features/iam/domain/account';

type Input = Omit<Account, 'id'>;

export class CreateAccountCommand extends Command<Account> {
  constructor(public readonly input: Input) {
    super();
  }
}
