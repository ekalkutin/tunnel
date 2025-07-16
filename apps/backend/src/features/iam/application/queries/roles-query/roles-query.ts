import { Query } from '@nestjs/cqrs';

type Input = {};
type Output = {};

export class RolesQuery extends Query<Output[]> {
  constructor(public readonly input?: Input) {
    super();
  }
}
