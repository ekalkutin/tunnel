import { Query } from '@nestjs/cqrs';

import { Role } from 'features/iam/domain';

type Input = {};

export class RolesQuery extends Query<Role[]> {
  constructor(public readonly input?: Input) {
    super();
  }
}
