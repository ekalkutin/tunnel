import { Module } from '@nestjs/common';

import { IPAllocatorServicePort } from 'features/device/application/ports';

import { IPAllocatorServiceAdapter } from './ip-allocator-service.adapter';

@Module({
  imports: [],
  providers: [
    {
      provide: IPAllocatorServicePort,
      useClass: IPAllocatorServiceAdapter,
    },
  ],
  exports: [IPAllocatorServicePort],
})
export class IPAllocatorModule {}
