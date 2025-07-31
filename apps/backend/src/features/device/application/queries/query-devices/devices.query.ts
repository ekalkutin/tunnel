import { Query } from '@nestjs/cqrs';

type Input = {
  readonly accountId?: string;
};

type Output = {
  readonly id: string;
  readonly title: string;
  readonly ip: string;
  readonly accountId: string;
  readonly privateKey: string;
};

export class DevicesQuery extends Query<Output[]> {
  constructor(public readonly input: Input = {}) {
    super();
  }
}
