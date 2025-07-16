import { v4 } from 'uuid';

import { SystemPermission } from '../../constants';

export class Role {
  private constructor(
    public readonly id: string,
    public code: string,
    public title: string,
    public description: string | null,
    public permissions: Array<SystemPermission>,
  ) {}

  public static create(props: {
    id?: string;
    code: string;
    title: string;
    permissions?: Array<SystemPermission>;
    description?: string | null;
  }): Role {
    return new Role(
      props.id || v4(),
      props.code,
      props.title,
      props.description || null,
      props.permissions || [],
    );
  }
}
