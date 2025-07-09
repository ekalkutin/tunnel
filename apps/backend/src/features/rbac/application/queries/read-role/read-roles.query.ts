import { Query } from '@nestjs/cqrs';

import { Role } from 'features/rbac/domain/entities';

import { ReadRoleInput } from './read-role.input';

export class ReadRoleQuery extends Query<Role> {
  constructor(public readonly input: ReadRoleInput) {
    super();
  }
}
