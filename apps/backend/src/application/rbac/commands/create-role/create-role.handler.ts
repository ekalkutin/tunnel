import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Role } from 'domain/entities';
import { RoleRepositoryPort } from 'domain/ports';

import { CreateRoleCommand } from './create-role.command';

@CommandHandler(CreateRoleCommand)
export class CreateRoleHandler implements ICommandHandler<CreateRoleCommand> {
  constructor(
    @Inject(RoleRepositoryPort)
    private readonly roleRepository: RoleRepositoryPort,
  ) {}

  async execute(command: CreateRoleCommand): Promise<Role> {
    return this.roleRepository.create(command.dto);
  }
}
