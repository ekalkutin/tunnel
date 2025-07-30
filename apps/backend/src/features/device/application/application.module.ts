import { Module } from '@nestjs/common';

import { IPAllocatorAdapter } from '../infrastructure/ip-allocator';
import { DevicePersistenceModule } from '../infrastructure/persistence';
import { WireguardAdapter } from '../infrastructure/wireguard';

import { CreateDeviceHandler } from './commands/create-device';
import { IPAllocator, Wireguard } from './ports';
import { DevicesQueryHandler } from './queries/query-devices';
import { CreateDeviceUseCase, QueryDevicesUseCase } from './use-cases';

@Module({
  imports: [DevicePersistenceModule],
  providers: [
    QueryDevicesUseCase,
    CreateDeviceUseCase,
    DevicesQueryHandler,
    CreateDeviceHandler,

    {
      provide: IPAllocator,
      useClass: IPAllocatorAdapter,
    },
    {
      provide: Wireguard,
      useClass: WireguardAdapter,
    },
  ],

  exports: [CreateDeviceUseCase, QueryDevicesUseCase],
})
export class DeviceApplicationModule {}
