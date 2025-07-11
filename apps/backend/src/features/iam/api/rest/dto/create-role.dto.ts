import { IsOptional, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  public readonly code!: string;

  @IsString()
  public readonly title!: string;

  @IsOptional()
  @IsString()
  public readonly description!: string;
}
