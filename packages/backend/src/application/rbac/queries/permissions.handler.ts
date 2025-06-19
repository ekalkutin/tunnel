import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Permission } from 'domain/entities';
import { PermissionRepositoryPort } from 'domain/ports/repositories';

import { PermissionsQuery } from './permissions.query';

@QueryHandler(PermissionsQuery)
export class PermissionQueryHandler
  implements IQueryHandler<PermissionsQuery, Permission[]>
{
  constructor(
    @Inject(PermissionRepositoryPort)
    private readonly permissionRepository: PermissionRepositoryPort,
  ) {}

  async execute(query: PermissionsQuery) {
    return this.permissionRepository.query(query.dto);
  }
}
