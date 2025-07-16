import { Global, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: 'some-secret',
          signOptions: {},
        };
      },
    }),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class AuthInfrastructureModule {}
