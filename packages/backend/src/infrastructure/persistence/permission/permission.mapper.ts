import { Types } from 'mongoose';

import { Permission } from 'domain/entities';

import { PermissionModel } from './permission.model';

export class PermissionMapper {
  static toDomain(permission: PermissionModel): Permission {
    return new Permission({
      id: permission._id.toString(),
      code: permission.code,
      description: permission.description,
    });
  }

  static toPersistence(permission: Permission): PermissionModel {
    return {
      _id: new Types.ObjectId(permission.id),
      code: permission.code,
      description: permission.description,
    };
  }
}
