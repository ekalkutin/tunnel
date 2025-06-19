import { QueryRolesDto } from 'domain/dtos/role';
import { Role } from 'domain/entities';

export abstract class RoleRepositoryPort {
  abstract query(query?: QueryRolesDto): Promise<Role[]>;
  abstract save(role: Role): Promise<Role>;
}
