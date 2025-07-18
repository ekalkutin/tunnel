import { Device } from './device.aggregate';

export abstract class DeviceRepository {
  abstract save(device: Device): Promise<Device>;
  abstract findById(id: string): Promise<Device>;
}
