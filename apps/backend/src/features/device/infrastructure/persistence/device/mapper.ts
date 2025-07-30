import { Device } from 'features/device/domain';

import { DevicePersistenceModel } from './device.type';

export class DeviceMapper {
  static toDomain(props: DevicePersistenceModel): Device {
    return Device.create({
      id: props.id,
      accountId: props.accountId,
      title: props.title,
      ip: props.ip,
      privateKey: props.privateKey,
    });
  }

  static toPersistence(props: Device): DevicePersistenceModel {
    return {
      id: props.id,
      accountId: props.accountId,
      title: props.title,
      ip: props.ip,
      privateKey: props.privateKey,
    };
  }
}
