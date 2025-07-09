import { Query } from '@nestjs/cqrs';

import { Role } from 'features/rbac/domain/entities';

import { ReadRolesInput } from './read-roles.input';

export class ReadRolesQuery extends Query<Role[]> {
  constructor(public readonly input: ReadRolesInput) {
    super();
  }
}
