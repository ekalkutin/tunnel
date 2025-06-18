import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppConfigModule, AppConfigService } from 'infrastructure/config';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: async (appConfig: AppConfigService) => {
        return {
          authSource: 'admin',
          uri: appConfig.DB_CONNECTION,
        };
      },
      inject: [AppConfigService],
    }),
  ],
})
export class DatabaseModule {}
