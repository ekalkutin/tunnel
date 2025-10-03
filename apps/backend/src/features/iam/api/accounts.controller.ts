import { Controller, Get, Version } from '@nestjs/common';

@Controller({
  path: '/accounts',
  version: ['1'],
})
export class AccountsController {
  constructor() {}

  @Version('1')
  @Get('/')
  async findAccounts() {
    return [];
  }
}
