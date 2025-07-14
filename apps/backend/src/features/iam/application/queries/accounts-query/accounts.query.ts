import { Query } from '@nestjs/cqrs';

type Input = {
  readonly username?: string;
};

type Output = {
  readonly id: string;
  readonly username: string;
  readonly role: {
    readonly id: string;
    readonly title: string;
  };
};

export class AccountsQuery extends Query<Output[]> {
  constructor(public readonly input?: Input) {
    super();
  }
}
