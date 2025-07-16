import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Role, RoleRepository } from 'features/iam/domain';

import { CreateRoleCommand } from './create-role.command';

@CommandHandler(CreateRoleCommand)
export class CreateRoleHandler implements ICommandHandler<CreateRoleCommand> {
  constructor(
    @Inject(RoleRepository)
    private readonly roleRepository: RoleRepository,
  ) {}

  public async execute(command: CreateRoleCommand): Promise<Role> {
    const role = await this.roleRepository.save(
      Role.create({
        code: command.input.code,
        title: command.input.title,
        description: command.input.description || null,
        permissions: command.input.permissions || [],
      }),
    );

    return role;
  }
}
