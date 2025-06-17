import { Account } from 'features/account/domain/models';

import { AccountEntity } from './account.entity';

export class AccountMapper {
  public static toDomain(entity: AccountEntity): Account {
    const account = new Account();

    account.id = entity._id.toJSON();
    account.email = entity.email;
    account.password = entity.password;

    return account;
  }
}
