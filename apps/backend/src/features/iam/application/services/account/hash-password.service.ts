import { createHash } from 'node:crypto';

import { Inject, Injectable } from '@nestjs/common';

import { AppConfigService } from 'infrastructure/config';

@Injectable()
export class HashPasswordService {
  constructor(
    @Inject(AppConfigService)
    private readonly appConfigService: AppConfigService,
  ) {}

  public hashPassword(password: string): string {
    return createHash('sha256')
      .update(password + this.appConfigService.APP_CRYPTO_SALT)
      .digest('hex');
  }
}
