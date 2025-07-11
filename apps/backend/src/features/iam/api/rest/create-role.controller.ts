import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CreateRoleCommand } from 'features/iam/application/commands/create-role';

import { CreateRoleDto } from './dto';

@Controller('/v1/iam/roles')
export class CreateRoleController {
  constructor(
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  @Post('/')
  async createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.commandBus.execute(new CreateRoleCommand(createRoleDto));
  }
}
