import { Inject, Injectable } from '@nestjs/common';

import {
  Account,
  AccountRepositoryPort,
  QueryOptions,
} from 'features/iam/domain/account';
import { PrismaService } from 'infrastructure/persistence/database/prisma';

@Injectable()
export class AccountRepositoryAdapter implements AccountRepositoryPort {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  public async save(account: Account): Promise<Account> {
    const item = await this.prisma.account.upsert({
      where: {
        id: account.id,
      },
      create: Account.toPersistence(account),
      update: Account.toPersistence(account),
      include: {
        role: true,
      },
    });
    return Account.create(item);
  }

  public async query(query: QueryOptions = {}): Promise<Account[]> {
    const items = await this.prisma.account.findMany({
      where: query,
      include: {
        role: true,
      },
    });
    return items.map(Account.create);
  }
}
