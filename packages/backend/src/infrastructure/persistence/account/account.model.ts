import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

import { RoleModel } from '../role/role.model';

export type AccountDocument = HydratedDocument<AccountModel>;

@Schema({})
export class AccountModel {
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
  public readonly email: string;

  @Prop({
    type: String,
    required: true,
  })
  public readonly password: string;

  @Prop({
    type: Types.ObjectId,
    ref: RoleModel.name,
    required: true,
  })
  public readonly roleId: Types.ObjectId;
}

export const AccountSchema = SchemaFactory.createForClass(AccountModel);
