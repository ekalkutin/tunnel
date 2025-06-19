import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type PermissionDocument = HydratedDocument<PermissionModel>;

@Schema({})
export class PermissionModel {
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
}

export const PermissionSchema = SchemaFactory.createForClass(PermissionModel);
