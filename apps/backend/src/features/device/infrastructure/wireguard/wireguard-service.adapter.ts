import { WireguardServicePort } from 'features/device/application/ports';

export class WireguardServiceAdapter implements WireguardServicePort {
  public generatePrivateKey(): string {
    return 'PRIVATE_KEY';
  }

  public extractPublicKeyFromPrivateKey(privateKey: string): string {
    return `${privateKey}-PUBLIC_KEY`;
  }
}
