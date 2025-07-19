import { Body, Controller, Inject, Post } from '@nestjs/common';

import { CreateDeviceUseCase } from 'features/device/application/use-cases';

import { CreateDeviceDto } from './create-device.dto';

@Controller('/v1/devices')
export class CreateDeviceController {
  constructor(
    @Inject(CreateDeviceUseCase)
    private readonly createDeviceUseCase: CreateDeviceUseCase,
  ) {}

  @Post('/')
  async createDevice(@Body() createDeviceDto: CreateDeviceDto) {
    return this.createDeviceUseCase.execute(createDeviceDto);
  }
}
