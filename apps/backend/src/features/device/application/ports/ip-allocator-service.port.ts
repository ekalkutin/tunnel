export abstract class IPAllocatorServicePort {
  abstract allocateIP(): string;
  abstract releaseIP(ip: string): void;
  abstract reserveIP(ip: string): void;
}
