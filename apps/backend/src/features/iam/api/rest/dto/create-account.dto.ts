import { IsOptional, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  public readonly username!: string;

  @IsString()
  public readonly password!: string;

  @IsOptional()
  @IsString()
  public readonly roleId?: string;
}
