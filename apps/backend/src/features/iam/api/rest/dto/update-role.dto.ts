import { IsOptional, IsString } from 'class-validator';

export class UpdateRoleDto {
  @IsOptional()
  @IsString()
  public readonly code?: string;

  @IsOptional()
  @IsString()
  public readonly title?: string;

  @IsOptional()
  @IsString()
  public readonly description?: string;
}
