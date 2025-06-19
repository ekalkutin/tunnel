import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { AccountApplicationModule } from './account/account.module';
import { CommonApplicationModule } from './common/common.module';
import { RBACApplicationModule } from './rbac/rbac.module';

@Module({
  imports: [
    CqrsModule.forRoot(),
    CommonApplicationModule,
    AccountApplicationModule,
    RBACApplicationModule,
  ],
  providers: [],
})
export class ApplicationModule {}
