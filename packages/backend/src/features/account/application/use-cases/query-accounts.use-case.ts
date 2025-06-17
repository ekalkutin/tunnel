import { Inject, Injectable } from '@nestjs/common';

import { QueryAccountsDto } from 'features/account/domain/dto';
import { Account } from 'features/account/domain/models';
import { AccountRepositoryPort } from 'features/account/domain/ports';

@Injectable()
export class QueryAccountsUseCase {
  constructor(
    @Inject(AccountRepositoryPort)
    private readonly accountRepository: AccountRepositoryPort,
  ) {}

  public async execute(query?: QueryAccountsDto): Promise<Account[]> {
    return this.accountRepository.query(query);
  }
}
