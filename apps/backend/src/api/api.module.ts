import { Module } from '@nestjs/common';

import { RBACRESTModule } from './rest/rbac/rbac.module';

@Module({
  imports: [RBACRESTModule],
})
export class APIModule {}
