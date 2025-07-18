import { Role } from './role.aggregate';

export abstract class RoleRepository {
  abstract save(role: Role): Promise<Role>;
  abstract findById(id: string): Promise<Role>;
  abstract findByCode(id: string): Promise<Role>;
}
