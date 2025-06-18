import { Permission } from './permission.model';

export class Role {
  public id: string;
  public code: string;
  public description: string;
  public permissions: Permission[];
  constructor() {}
}
