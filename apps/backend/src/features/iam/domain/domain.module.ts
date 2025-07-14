import { Module } from '@nestjs/common';

import { IAMPersistenceModule } from '../infrastructure/persistence';

import { RoleAssigmentService } from './services/role-assigment.service';

@Module({
  imports: [IAMPersistenceModule],
  providers: [RoleAssigmentService],
})
export class IAMDomainModule {}
