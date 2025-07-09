import { Command } from '@nestjs/cqrs';

import { Role } from 'features/rbac/domain/entities';

import { CreateRoleInput } from './create-role.input';

export class CreateRoleCommand extends Command<Role> {
  constructor(public readonly input: CreateRoleInput) {
    super();
  }
}
