import { IsOptional, IsString } from 'class-validator';

export class QueryAccountsDto {
  @IsOptional()
  @IsString()
  public readonly email?: string;
}
