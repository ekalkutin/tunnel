import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CreateAccountCommand } from 'features/iam/application/commands/create-account';

import { CreateAccountDto } from './dto';

@Controller('/v1/iam/accounts')
export class CreateAccountController {
  constructor(@Inject(CommandBus) private readonly commandBus: CommandBus) {}

  @Post('/')
  async createAccount(@Body() createAccountDto: CreateAccountDto) {
    return this.commandBus.execute(
      new CreateAccountCommand(
        createAccountDto.username,
        createAccountDto.password,
      ),
    );
  }
}
