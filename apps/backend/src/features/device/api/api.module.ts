import { Module } from '@nestjs/common';

import { DeviceApplicationModule } from '../application/application.module';

import { QueryDevicesController } from './rest/query-devices/query-devices.controller';

@Module({
  imports: [DeviceApplicationModule],
  controllers: [QueryDevicesController],
})
export class DeviceAPIModule {}
