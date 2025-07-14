import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { PrismaService } from 'infrastructure/persistence/database/prisma';

import { AccountsQuery } from './accounts.query';

@QueryHandler(AccountsQuery)
export class AccountsQueryHandler implements IQueryHandler<AccountsQuery> {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  public async execute(query: AccountsQuery) {
    const accounts = await this.prisma.account.findMany({
      where: query.input,
      select: {
        id: true,
        username: true,
        role: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    return accounts;
  }
}
