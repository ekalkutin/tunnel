import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { Account, Role } from 'features/iam/domain';
import { DEFAULT_ROLE } from 'features/iam/domain/constants';
import { AppConfigService } from 'infrastructure/config';

import { CreateAccountCommand } from '../../commands/create-account';
import { CreateRoleCommand } from '../../commands/create-role';
import { AccountQuery } from '../../queries/account-query';
import { RoleQuery } from '../../queries/role-query';
import { HashPasswordService } from '../../services/account';

@Injectable()
export class IAMBoostrapUseCase implements OnApplicationBootstrap {
  constructor(
    @Inject(AppConfigService)
    private readonly appConfigService: AppConfigService,
    @Inject(HashPasswordService)
    private readonly hashPasswordService: HashPasswordService,
    @Inject(QueryBus) private readonly queryBus: QueryBus,
    @Inject(CommandBus) private readonly commandBus: CommandBus,
  ) {}

  public async onApplicationBootstrap() {
    const role = await this.createDefaultRoleIfNotExists();
    await this.createDefaultAccountIfNotExists(role.id);
  }

  private async createDefaultRoleIfNotExists(): Promise<Role> {
    let role: Role;

    try {
      role = await this.queryBus.execute(
        new RoleQuery({
          code: DEFAULT_ROLE.code,
        }),
      );
      console.log(`Role ${role.code} already exists`);
    } catch (error) {
      console.error(error);
      role = await this.commandBus.execute(new CreateRoleCommand(DEFAULT_ROLE));
    }

    return role;
  }

  private async createDefaultAccountIfNotExists(roleId: string): Promise<void> {
    try {
      const account = await this.queryBus.execute(
        new AccountQuery({
          username: this.appConfigService.ADMIN_EMAIL,
        }),
      );
      if (account) {
        console.log(`Account ${account.username} already exists`);
      }
    } catch (error) {
      console.error(error);
      await this.commandBus.execute(
        new CreateAccountCommand(
          Account.create({
            username: this.appConfigService.ADMIN_EMAIL,
            password: this.hashPasswordService.hashPassword(
              this.appConfigService.ADMIN_PASSWORD,
            ),
            roleId: roleId,
          }),
        ),
      );
    }
  }
}
