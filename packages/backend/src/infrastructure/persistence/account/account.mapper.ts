import { Types } from 'mongoose';

import { Account } from 'domain/entities';

import { AccountModel } from './account.model';

export class AccountMapper {
  static toDomain(account: AccountModel): Account {
    return new Account({
      id: account._id.toString(),
      email: account.email,
      password: account.password,
      roleId: account.roleId.toString(),
    });
  }

  static toPersistence(account: Account): AccountModel {
    return {
      _id: new Types.ObjectId(account.id),
      email: account.email,
      password: account.password,
      roleId: new Types.ObjectId(account.roleId),
    };
  }
}
