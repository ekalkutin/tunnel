import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Role } from 'domain/entities';
import { RoleRepositoryPort } from 'domain/ports';

import { ReadRolesQuery } from './read-roles.query';

@QueryHandler(ReadRolesQuery)
export class ReadRolesHandler implements IQueryHandler<ReadRolesQuery, Role[]> {
  constructor(
    @Inject(RoleRepositoryPort)
    private readonly roleRepository: RoleRepositoryPort,
  ) {}

  async execute(query: ReadRolesQuery): Promise<Role[]> {
    return this.roleRepository.query(query.dto);
  }
}
