import { Command } from '@nestjs/cqrs';

import { Device } from 'features/device/domain';

type Input = {
  readonly accountId: string;
  readonly title: string;
};

export class CreateDeviceCommand extends Command<Device> {
  constructor(public readonly input: Input) {
    super();
  }
}
