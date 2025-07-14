import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Role, RoleRepository } from 'features/iam/domain';

import { UpdateRoleCommand } from './update-role.command';

@CommandHandler(UpdateRoleCommand)
export class UpdateRoleHandler implements ICommandHandler<UpdateRoleCommand> {
  constructor(
    @Inject(RoleRepository)
    private readonly roleRepository: RoleRepository,
  ) {}

  public async execute(command: UpdateRoleCommand): Promise<Role> {
    const { id, ...update } = command.input;

    const role = await this.roleRepository.findById(id);

    return this.roleRepository.save(
      Role.create({
        ...role,
        ...update,
      }),
    );
  }
}
