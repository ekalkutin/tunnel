import { Type } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class QueryAccountsDto {
  @IsOptional()
  @IsString()
  public readonly email?: string;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  public readonly full?: boolean;
}
