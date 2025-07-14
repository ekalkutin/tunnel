import { Command } from '@nestjs/cqrs';

import { Role } from 'features/iam/domain';

type Input = {
  readonly code: string;
  readonly title: string;
  readonly description?: string | null;
};

export class CreateRoleCommand extends Command<Role> {
  constructor(public readonly input: Input) {
    super();
  }
}
