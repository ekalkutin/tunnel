import { Module } from '@nestjs/common';

import { HealthModule } from 'features/health/health.module';
import { IAMModule } from 'features/iam/iam.module';

@Module({
  imports: [HealthModule, IAMModule],
})
export class MainModule {}
