import { Module } from '@nestjs/common';

import { AccountsRESTModule } from './accounts/accounts.module';
import { RBACRESTModule } from './rbac/rbac.module';

@Module({
  imports: [AccountsRESTModule, RBACRESTModule],
})
export class RESTModule {}
