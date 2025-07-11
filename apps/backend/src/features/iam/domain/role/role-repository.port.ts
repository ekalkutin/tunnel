import { Role } from './role.entity';

export interface QueryOptions {}

export abstract class RoleRepositoryPort {
  abstract save(role: Role): Promise<Role>;
}
