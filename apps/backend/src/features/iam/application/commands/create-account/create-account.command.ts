import { Command } from '@nestjs/cqrs';

import { Account } from 'features/iam/domain';

type Input = {
  readonly username: string;
  readonly password: string;
  readonly roleId: string;
};

export class CreateAccountCommand extends Command<Account> {
  constructor(public readonly input: Input) {
    super();
  }
}
