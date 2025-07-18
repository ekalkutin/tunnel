import { v4 } from 'uuid';

export class Device {
  private constructor(
    public readonly id: string,
    public readonly accountId: string,
    public title: string,
  ) {}

  static create(props: {
    id?: string;
    accountId: string;
    title: string;
  }): Device {
    return new Device(props.id || v4(), props.accountId, props.title);
  }
}
