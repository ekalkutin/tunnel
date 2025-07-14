import { Account } from './account.aggregate';

export abstract class AccountRepository {
  abstract save(account: Account): Promise<Account>;
  abstract findById(id: string): Promise<Account>;
}
