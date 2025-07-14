import { Role } from 'features/iam/domain';

import { RolePersistenceModel } from './role.type';

export class RoleMapper {
  public static toDomain(props: RolePersistenceModel): Role {
    return Role.create({
      id: props.id,
      code: props.code,
      title: props.title,
      description: props.description,
    });
  }
  public static toPersistence(props: Role): RolePersistenceModel {
    return {
      id: props.id,
      code: props.code,
      title: props.title,
      description: props.description,
    };
  }
}
