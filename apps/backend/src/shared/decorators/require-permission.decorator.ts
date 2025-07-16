import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';

import { PermissionGuard } from 'features/auth/infrastructure/guards';
import { SystemPermission } from 'features/iam/domain/constants/permissions';

export const RequirePermission = (permission: SystemPermission) => {
  return applyDecorators(
    UseGuards(PermissionGuard),
    SetMetadata('permission', permission),
  );
};
