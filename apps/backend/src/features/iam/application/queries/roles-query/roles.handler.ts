import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { Role } from 'features/iam/domain';
import { PrismaService } from 'infrastructure/persistence/database/prisma';

import { RolesQuery } from './roles-query';

@QueryHandler(RolesQuery)
export class RolesQueryHandler implements IQueryHandler<RolesQuery> {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  public async execute(query: RolesQuery): Promise<Role[]> {
    const roles = await this.prisma.role.findMany({
      where: query.input,
    });

    return roles;
  }
}
