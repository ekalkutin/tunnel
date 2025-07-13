import { IsString } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  public readonly username!: string;

  @IsString()
  public readonly password!: string;

  @IsString()
  public readonly roleId!: string;
}
