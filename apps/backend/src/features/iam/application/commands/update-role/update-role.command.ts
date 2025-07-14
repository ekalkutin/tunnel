import { Command } from '@nestjs/cqrs';

import { Role } from 'features/iam/domain';

type Input = Partial<Role> & {
  readonly id: string;
};

export class UpdateRoleCommand extends Command<Role> {
  constructor(public readonly input: Input) {
    super();
  }
}
