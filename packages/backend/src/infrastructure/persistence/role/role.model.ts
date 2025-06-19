import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

import { PermissionModel } from '../permission';

export type RoleDocument = HydratedDocument<RoleModel>;

@Schema({})
export class RoleModel {
  @Prop({
    type: Types.ObjectId,
    default: () => new Types.ObjectId(),
  })
  public _id: Types.ObjectId;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  public readonly code: string;

  @Prop({
    type: String,
    required: true,
  })
  public readonly description: string;

  @Prop({
    type: [Types.ObjectId],
    ref: PermissionModel.name,
  })
  public permissions?: Types.ObjectId[];
}

export const RoleSchema = SchemaFactory.createForClass(RoleModel);
