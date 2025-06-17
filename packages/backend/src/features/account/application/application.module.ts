import { Module } from '@nestjs/common';

import { AccountInfrastructureModule } from '../infrastructure/infrastructure.module';

import { CreateAccountUseCase, QueryAccountsUseCase } from './use-cases';

@Module({
  imports: [AccountInfrastructureModule],
  providers: [QueryAccountsUseCase, CreateAccountUseCase],
  exports: [QueryAccountsUseCase, CreateAccountUseCase],
})
export class AccountApplicationModule {}
