export abstract class IPAllocator {
  abstract allocateIP(): string;
  abstract releaseIP(ip: string): void;
}
