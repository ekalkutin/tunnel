import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { PrismaService } from 'infrastructure/persistence/database/prisma';

import { AccountQuery } from './account.query';

@QueryHandler(AccountQuery)
export class AccountQueryHandler implements IQueryHandler<AccountQuery> {
  constructor(
    @Inject(PrismaService)
    private readonly prisma: PrismaService,
  ) {}

  public async execute(query: AccountQuery) {
    if (!query.input.id && !query.input.username) {
      throw new Error('Provide either ID or username');
    }

    const accounts = await this.prisma.account.findUniqueOrThrow({
      where: {
        id: query.input?.id,
        username: query.input?.username,
      },
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
