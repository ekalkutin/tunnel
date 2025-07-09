import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Role } from 'features/rbac/domain/entities';
import { RoleRepositoryPort } from 'features/rbac/domain/ports';

import { ReadRoleQuery } from './read-roles.query';

@QueryHandler(ReadRoleQuery)
export class ReadRoleHandler implements IQueryHandler<ReadRoleQuery, Role> {
  constructor(
    @Inject(RoleRepositoryPort)
    private readonly roleRepository: RoleRepositoryPort,
  ) {}

  async execute(query: ReadRoleQuery): Promise<Role> {
    if (!query.input.code)
      throw new Error(`Role code is required , ${query.input}`);
    return this.roleRepository.getByCode(query.input.code);
  }
}
