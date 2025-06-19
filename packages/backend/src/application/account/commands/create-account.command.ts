import { Command } from '@nestjs/cqrs';

import { Account } from 'domain/entities';

export class CreateAccountCommand extends Command<Account> {
  constructor(public readonly data: Account) {
    super();
  }
}
