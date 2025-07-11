import { Account } from './account.entity';

export interface QueryOptions extends Partial<Account> {}

export abstract class AccountRepositoryPort {
  abstract save(account: Account): Promise<Account>;
  abstract query(query?: QueryOptions): Promise<Account[]>;
}
