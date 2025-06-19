import { Module } from '@nestjs/common';

import { AppConfigModule } from 'infrastructure/config';

import { APIModule } from './api';
import { ApplicationModule } from './application';

@Module({
  imports: [AppConfigModule, ApplicationModule, APIModule],
})
export class MainModule {}
