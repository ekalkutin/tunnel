import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CreateRoleCommand } from 'features/rbac/application/commands/create-role';

import { CreateRoleDto } from './create-role.dto';

@Controller('/v1/rbac/roles')
export class CreateRoleController {
  constructor(@Inject(CommandBus) private readonly commandBus: CommandBus) {}

  @Post('/')
  async createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.commandBus.execute(
      new CreateRoleCommand({
        code: createRoleDto.code,
      }),
    );
  }
}
