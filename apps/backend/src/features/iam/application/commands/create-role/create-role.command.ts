import { Command } from '@nestjs/cqrs';

import { Role } from 'features/iam/domain';
import { SystemPermission } from 'features/iam/domain/constants';

type Input = {
  readonly code: string;
  readonly title: string;
  readonly description?: string | null;
  readonly permissions?: SystemPermission[];
};

export class CreateRoleCommand extends Command<Role> {
  constructor(public readonly input: Input) {
    super();
  }
}
