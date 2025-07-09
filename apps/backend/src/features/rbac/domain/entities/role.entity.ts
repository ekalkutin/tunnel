import { v4 } from 'uuid';

export class Role {
  public id: string;
  public code: string;
  public title: string;
  public permissions: string[];

  private constructor(props: Role) {
    this.id = props.id;
    this.code = props.code;
    this.title = props.title;
    this.permissions = props.permissions;
  }

  static create(props: Partial<Role>) {
    const defaultProps: Role = {
      id: props.id || v4(),
      code: props.code || 'DEFAULT_ROLE',
      title: props.title || 'Default role',
      permissions: props.permissions || [],
    };

    return new Role(defaultProps);
  }
}
