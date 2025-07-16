import { Controller, Get, Inject } from '@nestjs/common';

import { QueryRolesUseCase } from 'features/iam/application/use-cases';

@Controller('/v1/iam/roles')
export class QueryRolesController {
  constructor(
    @Inject(QueryRolesUseCase)
    private readonly queryRolesUseCase: QueryRolesUseCase,
  ) {}

  @Get('/')
  async queryRoles() {
    return this.queryRolesUseCase.execute();
  }
}
