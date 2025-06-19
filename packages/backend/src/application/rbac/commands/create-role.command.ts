import { Command } from '@nestjs/cqrs';

import { Role } from 'domain/entities';

export class CreateRoleCommand extends Command<Role> {
  constructor(public readonly data: Role) {
    super();
  }
}
