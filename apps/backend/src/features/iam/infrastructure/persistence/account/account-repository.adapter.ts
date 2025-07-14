import { Inject, Injectable } from '@nestjs/common';

import { Account, type AccountRepository } from 'features/iam/domain';
import { PrismaService } from 'infrastructure/persistence/database/prisma';

import { AccountMapper } from './mapper';

@Injectable()
export class AccountRepositoryAdapter implements AccountRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  public async save(account: Account): Promise<Account> {
    const item = await this.prisma.account.upsert({
      where: {
        id: account.id,
      },
      create: AccountMapper.toPersistence(account),
      update: AccountMapper.toPersistence(account),
    });
    return AccountMapper.toDomain(item);
  }

  public async findById(id: string): Promise<Account> {
    const item = await this.prisma.account.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return AccountMapper.toDomain(item);
  }
}
