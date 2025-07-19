import { Inject, Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CreateDeviceCommand } from '../../commands/create-device';

type Input = {
  readonly accountId: string;
  readonly title: string;
};

@Injectable()
export class CreateDeviceUseCase {
  constructor(@Inject(CommandBus) private readonly commandBus: CommandBus) {}

  public async execute(input: Input) {
    const device = await this.commandBus.execute(
      new CreateDeviceCommand({
        accountId: input.accountId,
        title: input.title,
      }),
    );

    return device;
  }
}
