import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

import { JWTAuthService } from 'features/auth/application/services/jwt';
import { SystemPermission } from 'features/iam/domain/constants';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    @Inject(Reflector) private readonly reflector: Reflector,
    @Inject(JWTAuthService) private readonly jwtAuthService: JWTAuthService,
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const permission = this.reflector.get<SystemPermission>(
      'permission',
      context.getHandler(),
    );

    if (!permission) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractToken(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    const authenticatedUser =
      await this.jwtAuthService.verifyAndDecodeToken(token);

    request['user'] = authenticatedUser;

    const hasPermission = authenticatedUser.permissions.includes(permission);
    if (hasPermission) return true;
    return false;
  }

  private extractToken(request: Request): string | null {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    void type; // Bearer

    return token || null;
  }
}
