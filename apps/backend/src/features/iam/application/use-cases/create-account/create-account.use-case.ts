import { createHash } from 'node:crypto';

import { Inject, Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { Account } from 'features/iam/domain';
import { AppConfigService } from 'infrastructure/config';

import { CreateAccountCommand } from '../../commands/create-account';

type Input = {
  readonly username: string;
  readonly password: string;
  readonly roleId: string;
};

@Injectable()
export class CreateAccountUseCase {
  constructor(
    @Inject(AppConfigService)
    private readonly appConfigService: AppConfigService,
    @Inject(CommandBus) private readonly commandBus: CommandBus,
  ) {}

  public async execute(input: Input): Promise<Account> {
    const account = await this.commandBus.execute(
      new CreateAccountCommand({
        ...input,
        password: this.hashPasswordWithSalt(input.password),
      }),
    );

    return account;
  }

  private hashPasswordWithSalt(password: string) {
    const salt = this.appConfigService.APP_CRYPTO_SALT;

    return createHash('sha256')
      .update(password + salt)
      .digest('hex');
  }
}
