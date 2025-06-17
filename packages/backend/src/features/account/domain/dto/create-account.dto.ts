import { IsString } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  public readonly email: string;

  @IsString()
  public readonly password: string;
}
