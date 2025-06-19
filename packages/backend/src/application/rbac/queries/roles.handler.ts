import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Role } from 'domain/entities';
import { RoleRepositoryPort } from 'domain/ports/repositories';

import { RolesQuery } from './roles.query';

@QueryHandler(RolesQuery)
export class RoleQueryHandler implements IQueryHandler<RolesQuery, Role[]> {
  constructor(
    @Inject(RoleRepositoryPort)
    private readonly roleRepository: RoleRepositoryPort,
  ) {}

  async execute(query: RolesQuery) {
    return this.roleRepository.query(query.dto);
  }
}
