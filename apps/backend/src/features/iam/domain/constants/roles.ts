import { Role } from '../aggregates/role/role.aggregate';

import { PERMISSIONS } from './permissions';

export const DEFAULT_ROLE = Role.create({
  code: 'ROOT_ROLE',
  title: 'Root',
  description: 'Root role with full access',
  permissions: Object.values(PERMISSIONS),
});
