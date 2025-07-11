import { Inject, Injectable } from '@nestjs/common';

import {
  QueryOptions,
  Role,
  RoleRepositoryPort,
} from 'features/iam/domain/role';
import { PrismaService } from 'infrastructure/persistence/database/prisma';

@Injectable()
export class RoleRepositoryAdapter implements RoleRepositoryPort {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  public async save(role: Role): Promise<Role> {
    const item = await this.prisma.role.upsert({
      where: {
        id: role.id,
      },
      create: Role.toPersistence(role),
      update: Role.toPersistence(role),
    });
    return Role.create(item);
  }

  public async query(query: QueryOptions = {}): Promise<Role[]> {
    const items = await this.prisma.role.findMany({
      where: query,
    });

    return items.map(Role.create);
  }

  public async queryOne(query: QueryOptions = {}): Promise<Role> {
    const item = await this.prisma.role.findUniqueOrThrow({
      where: {
        code: query.code,
        id: query.id,
      },
    });
    return Role.create(item);
  }
}
