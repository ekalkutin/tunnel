import { Inject, Injectable } from '@nestjs/common';

import { Role, type RoleRepository } from 'features/iam/domain';
import { PrismaService } from 'infrastructure/persistence/database/prisma';

import { RoleMapper } from './mapper';

@Injectable()
export class RoleRepositoryAdapter implements RoleRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  public async save(role: Role): Promise<Role> {
    const item = await this.prisma.role.upsert({
      where: {
        id: role.id,
      },
      create: RoleMapper.toPersistence(role),
      update: RoleMapper.toPersistence(role),
    });
    return RoleMapper.toDomain(item);
  }

  public async findById(id: string): Promise<Role> {
    const item = await this.prisma.role.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return RoleMapper.toDomain(item);
  }
}
