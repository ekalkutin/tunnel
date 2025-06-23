import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Role } from 'domain/entities';
import { RoleRepositoryPort } from 'domain/ports';

import { ReadRoleQuery } from './read-role.query';

@QueryHandler(ReadRoleQuery)
export class ReadRoleHandler implements IQueryHandler<ReadRoleQuery, Role> {
  constructor(
    @Inject(RoleRepositoryPort)
    private readonly roleRepository: RoleRepositoryPort,
  ) {}

  async execute(query: ReadRoleQuery): Promise<Role> {
    if (!query.dto?.code) throw new Error('Role code is required');
    return this.roleRepository.getByCode(query.dto.code);
  }
}
