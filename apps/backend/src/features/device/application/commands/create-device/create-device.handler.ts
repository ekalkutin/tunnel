import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Device, DeviceRepository } from 'features/device/domain';

import { CreateDeviceCommand } from './create-device.command';

@CommandHandler(CreateDeviceCommand)
export class CreateDeviceHandler
  implements ICommandHandler<CreateDeviceCommand>
{
  constructor(
    @Inject(DeviceRepository)
    private readonly deviceRepository: DeviceRepository,
  ) {}

  public async execute(command: CreateDeviceCommand): Promise<Device> {
    const device = await this.deviceRepository.save(
      Device.create({
        accountId: command.input.accountId,
        title: command.input.title,
      }),
    );

    return device;
  }
}
