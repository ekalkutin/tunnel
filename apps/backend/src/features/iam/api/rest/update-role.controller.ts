import { Body, Controller, Inject, Param, Put } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { UpdateRoleCommand } from 'features/iam/application/commands/update-role';

import { UpdateRoleDto } from './dto';

@Controller('/v1/iam/roles')
export class UpdateRoleController {
  constructor(
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  @Put('/:id')
  async updateRole(
    @Param('id') id: string,
    @Body() updateRoleDto: UpdateRoleDto,
  ) {
    return this.commandBus.execute(
      new UpdateRoleCommand({
        id: id,
        ...updateRoleDto,
      }),
    );
  }
}
