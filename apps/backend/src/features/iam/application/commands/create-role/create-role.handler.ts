import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Role, RoleRepositoryPort } from 'features/iam/domain/role';

import { CreateRoleCommand } from './create-role.command';

@CommandHandler(CreateRoleCommand)
export class CreateRoleHandler implements ICommandHandler<CreateRoleCommand> {
  constructor(
    @Inject(RoleRepositoryPort)
    private readonly roleRepository: RoleRepositoryPort,
  ) {}

  public async execute(command: CreateRoleCommand): Promise<Role> {
    const role = await this.roleRepository.save(
      Role.create({
        code: command.input.code,
        title: command.input.title,
        description: command.input.description,
      }),
    );

    return role;
  }
}
