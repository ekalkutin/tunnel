import { Injectable } from '@nestjs/common';

import { WireguardPort } from 'domain/ports/providers';

@Injectable()
export class WireguardAdapter implements WireguardPort {}
