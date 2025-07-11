import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Role, RoleRepositoryPort } from 'features/iam/domain/role';

import { RolesQuery } from './roles-query';

@QueryHandler(RolesQuery)
export class RolesQueryHandler implements IQueryHandler<RolesQuery> {
  constructor(
    @Inject(RoleRepositoryPort)
    private readonly roleRepository: RoleRepositoryPort,
  ) {}

  public async execute(query: RolesQuery): Promise<Role[]> {
    return this.roleRepository.query(query.options);
  }
}
