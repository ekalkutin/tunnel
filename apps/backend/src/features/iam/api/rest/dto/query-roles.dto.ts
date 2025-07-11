import { IsOptional, IsString } from 'class-validator';

export class QueryRolesDto {
  @IsOptional()
  @IsString()
  public readonly code?: string;

  @IsOptional()
  @IsString()
  public readonly title?: string;
}
