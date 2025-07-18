import { Module } from '@nestjs/common';

import { DeviceRepository } from 'features/device/domain';

import { DeviceRepositoryAdapter } from './device';

@Module({
  imports: [],
  providers: [
    {
      provide: DeviceRepository,
      useClass: DeviceRepositoryAdapter,
    },
  ],
  exports: [DeviceRepository],
})
export class DevicePersistenceModule {}
