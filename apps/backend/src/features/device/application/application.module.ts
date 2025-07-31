import { Module } from '@nestjs/common';

import { IPAllocatorAdapter } from '../infrastructure/ip-allocator';
import { DevicePersistenceModule } from '../infrastructure/persistence';
import { WireguardModule } from '../infrastructure/wireguard';

import { CreateDeviceHandler } from './commands/create-device';
import { IPAllocator } from './ports';
import { DevicesQueryHandler } from './queries/query-devices';
import { CreateDeviceUseCase, QueryDevicesUseCase } from './use-cases';

@Module({
  imports: [DevicePersistenceModule, WireguardModule],
  providers: [
    QueryDevicesUseCase,
    CreateDeviceUseCase,
    DevicesQueryHandler,
    CreateDeviceHandler,

    {
      provide: IPAllocator,
      useClass: IPAllocatorAdapter,
    },
  ],

  exports: [CreateDeviceUseCase, QueryDevicesUseCase],
})
export class DeviceApplicationModule {}
