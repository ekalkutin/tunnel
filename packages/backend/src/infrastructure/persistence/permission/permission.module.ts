import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PermissionRepositoryPort } from 'domain/ports/repositories';

import { PermissionRepositoryAdapter } from './permission.adapter';
import { PermissionModel, PermissionSchema } from './permission.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PermissionModel.name,
        schema: PermissionSchema,
      },
    ]),
  ],
  providers: [
    {
      provide: PermissionRepositoryPort,
      useClass: PermissionRepositoryAdapter,
    },
  ],
  exports: [PermissionRepositoryPort],
})
export class PermissionPersistenceModule {}
