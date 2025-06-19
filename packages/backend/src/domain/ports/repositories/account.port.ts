import { QueryAccountsDto, CreateAccountDto } from 'domain/dtos/account';
import { Account } from 'domain/entities';

export abstract class AccountRepositoryPort {
  abstract create(data: CreateAccountDto): Promise<Account>;
  abstract save(data: Account): Promise<Account>;
  abstract query(query?: QueryAccountsDto): Promise<Account[]>;
}
