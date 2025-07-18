import { IsOptional, IsString } from 'class-validator';

export class QueryDevicesDto {
  @IsOptional()
  @IsString()
  public readonly username?: string;
}
