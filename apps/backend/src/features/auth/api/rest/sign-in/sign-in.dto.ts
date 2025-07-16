import { IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  public readonly username!: string;

  @IsString()
  public readonly password!: string;
}
