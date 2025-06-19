import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CreateAccountCommand } from 'application/account/commands';
import {
  CreatePermissionCommand,
  CreateRoleCommand,
} from 'application/rbac/commands';
import { Permission, Role } from 'domain/entities';
import { AppConfigService } from 'infrastructure/config';

@Injectable()
export class StartupUseCase implements OnModuleInit {
  constructor(
    @Inject(AppConfigService) private readonly appConfig: AppConfigService,
    @Inject(CommandBus) private readonly commandBus: CommandBus,
  ) {}

  async onModuleInit() {
    setImmediate(() => {
      this.initialize();
    });
  }

  private async initialize() {
    const { ADMIN_EMAIL, ADMIN_PASSWORD } = this.appConfig;

    const rootPermission = await this.commandBus.execute(
      new CreatePermissionCommand(
        new Permission({
          code: 'ROOT_PERMISSION',
          description: 'Root permission',
        }),
      ),
    );

    const role = await this.commandBus.execute(
      new CreateRoleCommand(
        new Role({
          code: 'SUPERADMIN',
          description: 'Root access',
          permissionIds: [rootPermission.id!],
        }),
      ),
    );

    await this.commandBus.execute(
      new CreateAccountCommand({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        roleId: role.id!,
      }),
    );
  }
}
