import { IsString } from 'class-validator';

export class CreateDeviceDto {
  @IsString()
  public readonly accountId!: string;

  @IsString()
  public readonly title!: string;
}
