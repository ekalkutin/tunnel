import { Inject, Injectable } from '@nestjs/common';

import { CreateAccountDto } from 'features/account/domain/dto';
import { AccountRepositoryPort } from 'features/account/domain/ports';

@Injectable()
export class CreateAccountUseCase {
  constructor(
    @Inject(AccountRepositoryPort)
    private readonly accountRepository: AccountRepositoryPort,
  ) {}

  public async execute(data: CreateAccountDto) {
    return this.accountRepository.create(data);
  }
}
