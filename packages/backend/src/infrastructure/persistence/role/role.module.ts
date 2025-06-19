import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RoleRepositoryPort } from 'domain/ports/repositories';

import { DatabaseModule } from '../database';

import { RoleRepositoryAdapter } from './role.adapter';
import { RoleModel, RoleSchema } from './role.model';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([
      {
        name: RoleModel.name,
        schema: RoleSchema,
      },
    ]),
  ],
  providers: [
    {
      provide: RoleRepositoryPort,
      useClass: RoleRepositoryAdapter,
    },
  ],
  exports: [RoleRepositoryPort],
})
export class RolePersistenceModule {}
