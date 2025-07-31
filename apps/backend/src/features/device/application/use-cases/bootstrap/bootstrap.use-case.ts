import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { IPAllocatorServicePort } from '../../ports';
import { DevicesQuery } from '../../queries/query-devices';

@Injectable()
export class BootstrapUseCase implements OnApplicationBootstrap {
  constructor(
    @Inject(QueryBus)
    private readonly queryBus: QueryBus,

    @Inject(IPAllocatorServicePort)
    private readonly ipAllocator: IPAllocatorServicePort,
  ) {}

  public async onApplicationBootstrap() {
    const devices = await this.queryBus.execute(new DevicesQuery());
    const allocatedIPs = devices.map(device => device.ip);
    allocatedIPs.forEach(ip => this.ipAllocator.reserveIP(ip));
  }
}
