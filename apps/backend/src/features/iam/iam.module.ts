import { Module } from '@nestjs/common';

import { AccountsController } from './api/accounts.controller';
import { KeycloakService } from './application/keycloak/keycloak.service';

@Module({
  controllers: [AccountsController],
  providers: [KeycloakService],
})
export class IAMModule {}
