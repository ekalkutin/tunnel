import { Wireguard } from 'features/device/application/ports';

export class WireguardAdapter implements Wireguard {
  public generatePrivateKey(): string {
    return 'PRIVATE_KEY';
  }

  public extractPublicKeyFromPrivateKey(privateKey: string): string {
    return `${privateKey}-PUBLIC_KEY`;
  }
}
