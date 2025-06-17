import { CreateAccountDto, QueryAccountsDto } from '../dto';
import { Account } from '../models';

export abstract class AccountRepositoryPort {
  abstract create(data: CreateAccountDto): Promise<Account>;
  abstract query(query?: QueryAccountsDto): Promise<Account[]>;
  abstract getById(id: string): Promise<Account>;
  abstract deleteById(id: string): Promise<Account>;
}
