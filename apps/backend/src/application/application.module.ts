import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { BootstrapUseCase } from './common/use-cases/bootstrap';
import { RBACApplicationModule } from './rbac/rbac.module';

@Module({
  imports: [CqrsModule.forRoot(), RBACApplicationModule],
  providers: [BootstrapUseCase],
})
export class ApplicationModule {}
