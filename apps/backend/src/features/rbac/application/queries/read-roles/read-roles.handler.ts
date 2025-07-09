import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Role } from 'features/rbac/domain/entities';
import { RoleRepositoryPort } from 'features/rbac/domain/ports';

import { ReadRolesInput } from './read-roles.input';
import { ReadRolesQuery } from './read-roles.query';

@QueryHandler(ReadRolesQuery)
export class ReadRolesHandler implements IQueryHandler<ReadRolesInput, Role[]> {
  constructor(
    @Inject(RoleRepositoryPort)
    private readonly roleRepository: RoleRepositoryPort,
  ) {}

  async execute(input: ReadRolesInput): Promise<Role[]> {
    void input;
    return this.roleRepository.query();
  }
}
