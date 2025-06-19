import { QueryPermissionsDto } from 'domain/dtos/permission';
import { Permission } from 'domain/entities';

export abstract class PermissionRepositoryPort {
  abstract save(permission: Permission): Promise<Permission>;
  abstract query(query?: QueryPermissionsDto): Promise<Permission[]>;
}
