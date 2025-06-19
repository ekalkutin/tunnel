import { IsOptional, IsString } from 'class-validator';

export class QueryPermissionsDto {
  @IsString()
  @IsOptional()
  public readonly id?: string;

  @IsString()
  @IsOptional()
  public readonly code?: string;
}
