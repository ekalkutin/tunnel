import { Controller, Get, Inject } from '@nestjs/common';

import { QueryDevicesUseCase } from 'features/device/application/use-cases';

@Controller('/v1/devices')
export class QueryDevicesController {
  constructor(
    @Inject(QueryDevicesUseCase)
    private readonly queryDevicesUseCase: QueryDevicesUseCase,
  ) {}

  @Get('/')
  async queryDevices() {
    return this.queryDevicesUseCase.execute();
  }
}
