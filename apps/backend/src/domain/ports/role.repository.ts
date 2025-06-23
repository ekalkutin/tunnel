import { CreateRoleDto, QueryRolesDto } from 'domain/dtos/role';
import { Role } from 'domain/entities';

export abstract class RoleRepositoryPort {
  abstract create(dto: CreateRoleDto): Promise<Role>;
  abstract query(dto: QueryRolesDto): Promise<Role[]>;
  abstract getByCode(code: string): Promise<Role>;
}
