import { Controller, Get, Version } from '@nestjs/common';

import packageJson from '../../../../../../package.json';

@Controller({
  path: '/health',
  version: ['1'],
})
export class HealthController {
  constructor() {}

  @Get()
  @Version('1')
  async ping() {
    return {
      ok: true,
      version: packageJson.version,
    };
  }
}
