import { v4 } from 'uuid';

export class Role {
  private constructor(
    public readonly id: string,
    public code: string,
    public title: string,
    public description: string | null,
  ) {}

  public static create(props: {
    id?: string;
    code: string;
    title: string;
    description?: string | null;
  }): Role {
    return new Role(
      props.id || v4(),
      props.code,
      props.title,
      props.description || null,
    );
  }
}
