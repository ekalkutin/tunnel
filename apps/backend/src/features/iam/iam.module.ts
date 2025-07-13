import { Module } from '@nestjs/common';

import { IAMAPIModule } from './api/api.module';

@Module({
  imports: [IAMAPIModule],
  exports: [],
})
export class IAMModule {}
