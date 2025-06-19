import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Permission } from 'domain/entities';
import { PermissionRepositoryPort } from 'domain/ports/repositories';

import { CreatePermissionCommand } from './create-permission.command';

@CommandHandler(CreatePermissionCommand)
export class CreatePermissionHandler
  implements ICommandHandler<CreatePermissionCommand>
{
  constructor(
    @Inject(PermissionRepositoryPort)
    private readonly permissionRepository: PermissionRepositoryPort,
  ) {}

  async execute(command: CreatePermissionCommand): Promise<Permission> {
    return this.permissionRepository.save(command.data);
  }
}
