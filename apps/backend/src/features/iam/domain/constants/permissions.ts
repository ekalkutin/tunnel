export const PERMISSIONS = {
  ACCOUNT_READ: 'accounts:read',
  ACCOUNT_CREATE: 'accounts:create',
} as const;

export type SystemPermission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];
