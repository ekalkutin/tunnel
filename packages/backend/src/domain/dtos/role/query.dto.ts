import { IsOptional, IsString } from 'class-validator';

export class QueryRolesDto {
  @IsString()
  @IsOptional()
  public readonly id?: string;

  @IsString()
  @IsOptional()
  public readonly code?: string;
}
