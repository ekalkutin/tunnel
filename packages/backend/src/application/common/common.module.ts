import { Module } from '@nestjs/common';

import { StartupUseCase } from './use-cases/startup';

@Module({
  providers: [StartupUseCase],
})
export class CommonApplicationModule {}
