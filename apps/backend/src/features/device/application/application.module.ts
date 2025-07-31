import { Module } from '@nestjs/common';

import { IPAllocatorModule } from '../infrastructure/ip-allocator';
import { DevicePersistenceModule } from '../infrastructure/persistence';
import { WireguardModule } from '../infrastructure/wireguard';

import { CreateDeviceHandler } from './commands/create-device';
import { DevicesQueryHandler } from './queries/query-devices';
import {
  BootstrapUseCase,
  CreateDeviceUseCase,
  QueryDevicesUseCase,
} from './use-cases';

@Module({
  imports: [DevicePersistenceModule, WireguardModule, IPAllocatorModule],
  providers: [
    QueryDevicesUseCase,
    CreateDeviceUseCase,
    BootstrapUseCase,
    DevicesQueryHandler,
    CreateDeviceHandler,
  ],

  exports: [CreateDeviceUseCase, QueryDevicesUseCase],
})
export class DeviceApplicationModule {}
