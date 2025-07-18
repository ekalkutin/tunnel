import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { PrismaService } from 'infrastructure/persistence/database/prisma';

import { DevicesQuery } from './devices.query';

@QueryHandler(DevicesQuery)
export class DevicesQueryHandler implements IQueryHandler<DevicesQuery> {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  public async execute(query: DevicesQuery) {
    const devices = await this.prisma.device.findMany({
      where: {
        accountId: query.input.accountId,
      },
    });

    return devices;
  }
}
