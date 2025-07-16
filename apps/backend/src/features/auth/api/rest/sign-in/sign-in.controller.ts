import { Body, Controller, Inject, Post } from '@nestjs/common';

import { SignInUseCase } from 'features/auth/application/use-cases/sign-in';

import { SignInDto } from './sign-in.dto';

@Controller('/v1/auth/sign-in')
export class SignInController {
  constructor(
    @Inject(SignInUseCase) private readonly signInUseCase: SignInUseCase,
  ) {}

  @Post('/')
  public async signIn(@Body() signInDto: SignInDto) {
    return this.signInUseCase.execute(signInDto);
  }
}
