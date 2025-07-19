import { Module } from '@nestjs/common';

import { DevicePersistenceModule } from '../infrastructure/persistence';

import { CreateDeviceHandler } from './commands/create-device';
import { DevicesQueryHandler } from './queries/query-devices';
import { CreateDeviceUseCase } from './use-cases';
import { QueryDevicesUseCase } from './use-cases/query-devices/query-devices.use-case';

@Module({
  imports: [DevicePersistenceModule],
  providers: [
    QueryDevicesUseCase,
    CreateDeviceUseCase,
    DevicesQueryHandler,
    CreateDeviceHandler,
  ],

  exports: [CreateDeviceUseCase, QueryDevicesUseCase],
})
export class DeviceApplicationModule {}
