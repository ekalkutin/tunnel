import { Role as RoleModel } from '@prisma/client';

import { Role } from 'domain/entities';

export class RoleMapper {
  static toDomain(role: RoleModel): Role {
    return new Role({ id: role.id, code: role.code });
  }
}
