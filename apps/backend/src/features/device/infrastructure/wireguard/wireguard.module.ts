import { Module } from '@nestjs/common';

import { WireguardServicePort } from 'features/device/application/ports';

import { WireguardServiceAdapter } from './wireguard-service.adapter';

@Module({
  imports: [],
  providers: [
    {
      provide: WireguardServicePort,
      useClass: WireguardServiceAdapter,
    },
  ],
  exports: [WireguardServicePort],
})
export class WireguardModule {}
