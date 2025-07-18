import { Module } from '@nestjs/common';

import { DeviceRepository } from 'features/device/domain';
import { DatabaseModule } from 'infrastructure/persistence/database';

import { DeviceRepositoryAdapter } from './device';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: DeviceRepository,
      useClass: DeviceRepositoryAdapter,
    },
  ],
  exports: [DatabaseModule, DeviceRepository],
})
export class DevicePersistenceModule {}
