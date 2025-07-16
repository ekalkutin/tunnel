import { Query } from '@nestjs/cqrs';

type Input = {
  readonly username?: string;
  readonly id?: string;
};

type Output = {
  readonly id: string;
  readonly username: string;
  readonly role: {
    readonly id: string;
    readonly title: string;
  };
};

export class AccountQuery extends Query<Output> {
  constructor(public readonly input: Input) {
    super();
  }
}
