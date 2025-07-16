import { Inject, Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { RolesQuery } from '../../queries/roles-query';

type Input = {};

@Injectable()
export class QueryRolesUseCase {
  constructor(@Inject(QueryBus) private readonly queryBus: QueryBus) {}

  public async execute(input?: Input) {
    const roles = await this.queryBus.execute(new RolesQuery(input));
    return roles;
  }
}
