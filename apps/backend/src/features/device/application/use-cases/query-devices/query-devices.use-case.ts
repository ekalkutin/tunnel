import { Inject, Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { DevicesQuery } from '../../queries/query-devices';

@Injectable()
export class QueryDevicesUseCase {
  constructor(@Inject(QueryBus) private readonly queryBus: QueryBus) {}

  public async execute() {
    return this.queryBus.execute(new DevicesQuery({}));
  }
}
