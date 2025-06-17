import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class AccountEntity {
  public readonly _id: Types.ObjectId;

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
}

export const AccountSchema = SchemaFactory.createForClass(AccountEntity);
