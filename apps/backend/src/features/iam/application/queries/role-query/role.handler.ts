import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Role, RoleRepository } from 'features/iam/domain';

import { RoleQuery } from './role-query';

@QueryHandler(RoleQuery)
export class RoleQueryHandler implements IQueryHandler<RoleQuery> {
  constructor(
    @Inject(RoleRepository)
    private readonly roleRepository: RoleRepository,
  ) {}

  public async execute(query: RoleQuery): Promise<Role> {
    return this.roleRepository.findById(query.input.id);
  }
}
