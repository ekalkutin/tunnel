import { IsOptional, IsString } from 'class-validator';

export class QueryRolesDto {
  @IsOptional()
  @IsString()
  public readonly code?: string;
}
