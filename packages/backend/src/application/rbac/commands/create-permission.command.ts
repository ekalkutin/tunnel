import { Command } from '@nestjs/cqrs';

import { Permission } from 'domain/entities';

export class CreatePermissionCommand extends Command<Permission> {
  constructor(public readonly data: Permission) {
    super();
  }
}
