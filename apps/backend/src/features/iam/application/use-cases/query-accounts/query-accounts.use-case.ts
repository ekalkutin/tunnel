import { Inject, Injectable } from '@nestjs/common';
import { Account } from '@prisma/client';

import { AccountRepositoryPort } from 'features/iam/domain/account';

type Input = Partial<Account>;

@Injectable()
export class QueryAccountsUseCase {
  constructor(
    @Inject(AccountRepositoryPort)
    private readonly accountRepository: AccountRepositoryPort,
  ) {}

  public async execute(input: Input): Promise<Account[]> {
    return this.accountRepository.query(input);
  }
}
