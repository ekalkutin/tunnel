import { Inject, Injectable } from '@nestjs/common';

import { Device, DeviceRepository } from 'features/device/domain';
import { PrismaService } from 'infrastructure/persistence/database/prisma';

import { DeviceMapper } from './mapper';

@Injectable()
export class DeviceRepositoryAdapter implements DeviceRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  public async save(device: Device): Promise<Device> {
    const item = await this.prisma.device.upsert({
      where: {
        id: device.id,
      },
      create: DeviceMapper.toPersistence(device),
      update: DeviceMapper.toPersistence(device),
    });

    return DeviceMapper.toDomain(item);
  }

  public async findById(id: string): Promise<Device> {
    const item = await this.prisma.device.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return DeviceMapper.toDomain(item);
  }
}
