import { Command } from '@nestjs/cqrs';

import { Role } from 'features/iam/domain/role';

type Input = Omit<Role, 'id'>;

export class CreateRoleCommand extends Command<Role> {
  constructor(public readonly input: Input) {
    super();
  }
}
