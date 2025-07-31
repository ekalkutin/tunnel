import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Device, DeviceRepository } from 'features/device/domain';

import { IPAllocator, WireguardServicePort } from '../../ports';

import { CreateDeviceCommand } from './create-device.command';

@CommandHandler(CreateDeviceCommand)
export class CreateDeviceHandler
  implements ICommandHandler<CreateDeviceCommand>
{
  constructor(
    @Inject(DeviceRepository)
    private readonly deviceRepository: DeviceRepository,

    @Inject(IPAllocator) private readonly ipAllocator: IPAllocator,
    @Inject(WireguardServicePort)
    private readonly wireguard: WireguardServicePort,
  ) {}

  public async execute(command: CreateDeviceCommand): Promise<Device> {
    const deviceIP = this.ipAllocator.allocateIP();
    const wireguardPrivateKey = this.wireguard.generatePrivateKey();

    const device = await this.deviceRepository.save(
      Device.create({
        accountId: command.input.accountId,
        title: command.input.title,
        ip: deviceIP,
        privateKey: wireguardPrivateKey,
      }),
    );

    return device;
  }
}
