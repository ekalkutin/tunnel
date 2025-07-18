import { Module } from '@nestjs/common';

import { DevicePersistenceModule } from '../infrastructure/persistence';

import { DevicesQueryHandler } from './queries/query-devices';
import { QueryDevicesUseCase } from './use-cases/query-devices/query-devices.use-case';

@Module({
  imports: [DevicePersistenceModule],
  providers: [QueryDevicesUseCase, DevicesQueryHandler],
  exports: [QueryDevicesUseCase, DevicesQueryHandler],
})
export class DeviceApplicationModule {}
