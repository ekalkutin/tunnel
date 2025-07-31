import { ip2long, long2ip, Netmask } from 'netmask';

import { IPAllocatorServicePort } from 'features/device/application/ports';

export class IPAllocatorServiceAdapter implements IPAllocatorServicePort {
  private readonly block: Netmask;
  private readonly allocatedIPs: Set<string>;

  constructor(reservedIPs: Array<string> = []) {
    this.block = new Netmask('10.0.0.0/24');
    this.allocatedIPs = new Set();

    this.allocatedIPs.add(this.block.first);
    this.allocatedIPs.add(this.block.base);
    this.allocatedIPs.add(this.block.broadcast);

    reservedIPs.forEach(ip => this.allocatedIPs.add(ip));
  }

  public allocateIP(): string {
    let iterator = ip2long(this.block.first);
    const lastIP = ip2long(this.block.last);

    while (iterator <= lastIP) {
      const ip = long2ip(iterator);

      if (!this.allocatedIPs.has(ip)) {
        this.allocatedIPs.add(ip);
        return ip;
      }

      iterator++;
    }

    throw new Error(`No available IP address in the block`);
  }

  public releaseIP(ip: string): void {
    if (this.allocatedIPs.has(ip)) {
      this.allocatedIPs.delete(ip);
    }
  }
}
