import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { CreateRoleCommand } from 'features/rbac/application/commands/create-role';
import { ReadRoleQuery } from 'features/rbac/application/queries/read-role/read-roles.query';
import { Role } from 'features/rbac/domain/entities';

@Injectable()
export class BootstrapUseCase implements OnModuleInit {
  constructor(
    @Inject(QueryBus) private readonly queryBus: QueryBus,
    @Inject(CommandBus) private readonly commandBus: CommandBus,
  ) {}

  async onModuleInit() {
    setImmediate(() => {
      this.execute();
    });
  }

  async execute(): Promise<void> {
    const role = await this.createRole('ROOT_ROLE');
    void role;
  }

  private async createRole(code: string): Promise<Role> {
    let role: Role;

    try {
      role = await this.queryBus.execute(
        new ReadRoleQuery({
          code,
        }),
      );
    } catch {
      role = await this.commandBus.execute(
        new CreateRoleCommand({
          code,
        }),
      );
    }
    return role;
  }
}
