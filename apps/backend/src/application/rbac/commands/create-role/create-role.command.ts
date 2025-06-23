import { Command } from '@nestjs/cqrs';

import { CreateRoleDto } from 'domain/dtos/role';
import { Role } from 'domain/entities';

export class CreateRoleCommand extends Command<Role> {
  constructor(public readonly dto: CreateRoleDto) {
    super();
  }
}
