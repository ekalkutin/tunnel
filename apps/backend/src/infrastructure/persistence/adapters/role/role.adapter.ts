import { Inject, Injectable } from '@nestjs/common';

import { CreateRoleDto } from 'domain/dtos/role';
import { Role } from 'domain/entities';
import { RoleRepositoryPort } from 'domain/ports';
import { PrismaService } from 'infrastructure/persistence/database/prisma';

import { RoleMapper } from './role.mapper';

@Injectable()
export class RoleRepositoryAdapter implements RoleRepositoryPort {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async create(dto: CreateRoleDto): Promise<Role> {
    const item = await this.prisma.role.create({
      data: dto,
    });

    return RoleMapper.toDomain(item);
  }

  async query(): Promise<Role[]> {
    const items = await this.prisma.role.findMany();

    return items.map(RoleMapper.toDomain);
  }

  async getByCode(code: string): Promise<Role> {
    const item = await this.prisma.role.findUnique({
      where: {
        code: code,
      },
    });

    if (!item) throw new Error('Entity not found');

    return RoleMapper.toDomain(item);
  }
}
