import { Query } from '@nestjs/cqrs';

type Input = {
  readonly accountId?: string;
};

type Output = {};

export class DevicesQuery extends Query<Output> {
  constructor(public readonly input: Input) {
    super();
  }
}
