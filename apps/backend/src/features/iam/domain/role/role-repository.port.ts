import { Role } from './role.entity';

export interface QueryOptions extends Partial<Role> {}

export abstract class RoleRepositoryPort {
  abstract save(role: Role): Promise<Role>;
  abstract query(query?: QueryOptions): Promise<Role[]>;
  abstract queryOne(query?: QueryOptions): Promise<Role>;
}
