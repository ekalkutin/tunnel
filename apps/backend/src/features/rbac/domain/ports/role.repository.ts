import { Role } from '../entities';

export abstract class RoleRepositoryPort {
  abstract getByCode(code: string): Promise<Role>;
  abstract save(dto: Role): Promise<Role>;
  abstract query(): Promise<Role[]>;
}
