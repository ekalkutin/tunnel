import { Body, Controller, Inject, Post } from '@nestjs/common';

import { CreateAccountUseCase } from 'features/account/application/use-cases';
import { CreateAccountDto } from 'features/account/domain/dto';

@Controller('/v1/accounts')
export class CreateAccountsController {
  constructor(
    @Inject(CreateAccountUseCase)
    private readonly createAccount: CreateAccountUseCase,
  ) {}

  @Post('/')
  async create(@Body() data: CreateAccountDto) {
    return this.createAccount.execute(data);
  }
}
