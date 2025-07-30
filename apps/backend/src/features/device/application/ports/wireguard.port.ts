export abstract class Wireguard {
  abstract generatePrivateKey(): string;
  abstract extractPublicKeyFromPrivateKey(privateKey: string): string;
}
