import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppConfigService } from 'infrastructure/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
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
