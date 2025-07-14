import { Inject, Injectable } from '@nestjs/common';

import { AccountRepository } from '../aggregates/account/account.repository';
import { RoleRepository } from '../aggregates/role/role.repository';

@Injectable()
export class RoleAssigmentService {
  constructor(
    @Inject(AccountRepository)
    private readonly accountRepository: AccountRepository,

    @Inject(RoleRepository)
    private readonly roleRepository: RoleRepository,
  ) {}

  public async execute(accountId: string, roleId: string): Promise<void> {
    const [account, role] = await Promise.all([
      this.accountRepository.findById(accountId),
      this.roleRepository.findById(roleId),
    ]);

    account.assignRole(role.id);

    this.accountRepository.save(account);
  }
}
