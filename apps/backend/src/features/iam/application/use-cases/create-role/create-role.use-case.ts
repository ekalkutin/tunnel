import { Inject, Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { Role } from 'features/iam/domain';
import { SystemPermission } from 'features/iam/domain/constants';

import { CreateRoleCommand } from '../../commands/create-role';

type Input = {
  readonly code: string;
  readonly title: string;
  readonly description?: string;
  readonly permissions?: Array<SystemPermission>;
};

@Injectable()
export class CreateRoleUseCase {
  constructor(
    @Inject(CommandBus)
    private readonly commandBus: CommandBus,
  ) {}

  public async execute(input: Input): Promise<Role> {
    const role = await this.commandBus.execute(
      new CreateRoleCommand({
        code: input.code,
        title: input.title,
        description: input.description,
        permissions: input.permissions,
      }),
    );

    return role;
  }
}
