import { v4 } from 'uuid';

export class Role {
  public readonly id: string;
  public code: string;
  public title: string;
  public description: string | null;

  private constructor(props: Role) {
    this.id = props.id;
    this.code = props.code;
    this.title = props.title;
    this.description = props.description;
  }

  static create(
    props: Omit<Role, 'id' | 'description'> & {
      id?: string;
      description?: string | null;
    },
  ): Role {
    return new Role({
      id: props.id || v4(),
      code: props.code,
      title: props.title,
      description: props.description || null,
    });
  }

  static toPersistence(role: Role) {
    return {
      id: role.id,
      code: role.code,
      title: role.title,
      description: role.description,
    };
  }
}
