import { Query } from '@nestjs/cqrs';

import { Role } from 'features/iam/domain';

type Input = {
  readonly id?: string;
  readonly code?: string;
};

export class RoleQuery extends Query<Role> {
  constructor(public readonly input: Input) {
    super();
  }
}
