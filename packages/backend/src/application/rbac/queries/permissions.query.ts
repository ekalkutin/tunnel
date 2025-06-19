import { Query } from '@nestjs/cqrs';

import { QueryPermissionsDto } from 'domain/dtos/permission';
import { Permission } from 'domain/entities';

export class PermissionsQuery extends Query<Permission[]> {
  constructor(public readonly dto?: QueryPermissionsDto) {
    super();
  }
}
