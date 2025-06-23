import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { type EnvironmentConfig } from './environment.interface';

@Injectable()
export class AppConfigService {
  constructor(
    @Inject(ConfigService)
    private readonly configService: ConfigService<EnvironmentConfig>,
  ) {}

  get DB_CONNECTION(): string {
    const DB_USERNAME = this.configService.get('DB_USERNAME');
    const DB_PASSWORD = this.configService.get('DB_PASSWORD');
    const DB_NAME = this.configService.get('DB_NAME');
    const DB_HOST = this.configService.get('DB_HOST');
    const DB_PORT = this.configService.get('DB_PORT');

    return `postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public`;
  }

  get ADMIN_EMAIL() {
    return this.configService.get('ADMIN_EMAIL');
  }

  get ADMIN_PASSWORD() {
    return this.configService.get('ADMIN_PASSWORD');
  }
}
