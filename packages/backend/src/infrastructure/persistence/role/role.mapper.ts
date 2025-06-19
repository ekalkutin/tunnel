import { Types } from 'mongoose';

import { Role } from 'domain/entities';

import { RoleModel } from './role.model';

export class RoleMapper {
  static toDomain(role: RoleModel): Role {
    const permissions = role.permissions || [];

    return new Role({
      id: role._id.toString(),
      code: role.code,
      description: role.description,
      permissionIds: permissions.map(permission => permission._id.toString()),
    });
  }

  static toPersistence(role: Role): RoleModel {
    return {
      _id: new Types.ObjectId(role.id),
      code: role.code,
      description: role.description,
      permissions: role.permissionIds.map(id => new Types.ObjectId(id)),
    };
  }
}
