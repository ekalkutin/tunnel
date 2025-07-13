import { Body, Controller, Inject, Post } from '@nestjs/common';

import { CreateRoleUseCase } from 'features/iam/application/use-cases';

import { CreateRoleDto } from './create-role.dto';

@Controller('/v1/iam/roles')
export class CreateRoleController {
  constructor(
    @Inject(CreateRoleUseCase)
    private readonly createRoleUseCase: CreateRoleUseCase,
  ) {}

  @Post('/')
  async createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.createRoleUseCase.execute(createRoleDto);
  }
}
