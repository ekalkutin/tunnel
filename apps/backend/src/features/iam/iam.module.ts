import { Module } from '@nestjs/common';

import { IAMAPIModule } from './api/api.module';
import { IAMDomainModule } from './domain/domain.module';

@Module({
  imports: [IAMDomainModule, IAMAPIModule],
  exports: [],
})
export class IAMModule {}
