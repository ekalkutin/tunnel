import { Query } from '@nestjs/cqrs';

import { QueryRolesDto } from 'domain/dtos/role';
import { Role } from 'domain/entities';

export class ReadRoleQuery extends Query<Role> {
  constructor(public readonly dto?: QueryRolesDto) {
    super();
  }
}
