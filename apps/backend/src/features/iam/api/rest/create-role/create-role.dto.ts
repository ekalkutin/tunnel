import { IsArray, IsIn, IsOptional, IsString } from 'class-validator';

import { PERMISSIONS, SystemPermission } from 'features/iam/domain/constants';

export class CreateRoleDto {
  @IsString()
  public readonly code!: string;

  @IsString()
  public readonly title!: string;

  @IsOptional()
  @IsString()
  public readonly description?: string;

  @IsOptional()
  @IsArray()
  @IsIn(Object.values(PERMISSIONS), { each: true })
  public readonly permissions!: SystemPermission[];
}
