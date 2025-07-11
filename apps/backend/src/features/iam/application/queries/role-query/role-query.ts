import { Query } from '@nestjs/cqrs';

import { Role, QueryOptions } from 'features/iam/domain/role';

export class RoleQuery extends Query<Role> {
  constructor(public readonly options?: QueryOptions) {
    super();
  }
}
