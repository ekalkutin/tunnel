import { Module } from '@nestjs/common';

import { DeviceAPIModule } from './api/api.module';

@Module({
  imports: [DeviceAPIModule],
})
export class DeviceModule {}
