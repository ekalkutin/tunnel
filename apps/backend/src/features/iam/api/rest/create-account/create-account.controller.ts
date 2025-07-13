import { Body, Controller, Inject, Post } from '@nestjs/common';

import { CreateAccountUseCase } from 'features/iam/application/use-cases';

import { CreateAccountDto } from './create-account.dto';

@Controller('/v1/iam/accounts')
export class CreateAccountController {
  constructor(
    @Inject(CreateAccountUseCase)
    private readonly createAccountUseCase: CreateAccountUseCase,
  ) {}

  @Post('/')
  async createAccount(@Body() createAccountDto: CreateAccountDto) {
    return this.createAccountUseCase.execute(createAccountDto);
  }
}
