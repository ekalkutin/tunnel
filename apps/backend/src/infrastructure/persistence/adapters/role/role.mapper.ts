import { Role as RoleModel } from '@prisma/client';

import { Role } from 'features/rbac/domain/entities';

export class RoleMapper {
  static toDomain(role: RoleModel): Role {
    return Role.create({
      id: role.id,
      code: role.code,
      title: role.title,
      permissions: role.permissions,
    });
  }
}
