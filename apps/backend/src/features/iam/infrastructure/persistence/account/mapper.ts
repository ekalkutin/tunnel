import { Account } from 'features/iam/domain';

import { AccountPersistenceModel } from './account.type';

export class AccountMapper {
  static toDomain(props: AccountPersistenceModel): Account {
    return Account.create({
      id: props.id,
      username: props.username,
      password: props.password,
      roleId: props.roleId,
    });
  }

  static toPersistence(props: Account): AccountPersistenceModel {
    return {
      id: props.id,
      username: props.username,
      password: props.password,
      roleId: props.roleId,
    };
  }
}
