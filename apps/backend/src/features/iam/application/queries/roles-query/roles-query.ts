import { Query } from '@nestjs/cqrs';

import { Role, QueryOptions } from 'features/iam/domain/role';

export class RolesQuery extends Query<Role[]> {
  constructor(public readonly options?: QueryOptions) {
    super();
  }
}
