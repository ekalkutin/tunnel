import { Module } from '@nestjs/common';

import { AccountPresentationModule } from './presentation/presentation.module';

@Module({
  imports: [AccountPresentationModule],
})
export class AccountModule {}
