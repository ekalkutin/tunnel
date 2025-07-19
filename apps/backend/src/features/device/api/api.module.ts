import { Module } from '@nestjs/common';

import { DeviceApplicationModule } from '../application/application.module';

import { CreateDeviceController } from './rest/create-device';
import { QueryDevicesController } from './rest/query-devices/query-devices.controller';

@Module({
  imports: [DeviceApplicationModule],
  controllers: [CreateDeviceController, QueryDevicesController],
})
export class DeviceAPIModule {}
