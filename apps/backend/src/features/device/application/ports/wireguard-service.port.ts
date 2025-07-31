export abstract class WireguardServicePort {
  abstract generatePrivateKey(): string;
  abstract extractPublicKeyFromPrivateKey(privateKey: string): string;
}
