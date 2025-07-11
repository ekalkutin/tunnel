import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Role, RoleRepositoryPort } from 'features/iam/domain/role';

import { UpdateRoleCommand } from './update-role.command';

@CommandHandler(UpdateRoleCommand)
export class UpdateRoleHandler implements ICommandHandler<UpdateRoleCommand> {
  constructor(
    @Inject(RoleRepositoryPort)
    private readonly roleRepository: RoleRepositoryPort,
  ) {}

  public async execute(command: UpdateRoleCommand): Promise<Role> {
    const { id, ...update } = command.input;

    const role = await this.roleRepository.queryOne({ id });

    return this.roleRepository.save(
      Role.create({
        ...role,
        ...update,
      }),
    );
  }
}
