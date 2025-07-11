import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Role, RoleRepositoryPort } from 'features/iam/domain/role';

import { RoleQuery } from './role-query';

@QueryHandler(RoleQuery)
export class RoleQueryHandler implements IQueryHandler<RoleQuery> {
  constructor(
    @Inject(RoleRepositoryPort)
    private readonly roleRepository: RoleRepositoryPort,
  ) {}

  public async execute(query: RoleQuery): Promise<Role> {
    return this.roleRepository.queryOne(query.options);
  }
}
