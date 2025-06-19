import { Account } from 'domain/entities';

export class CreateAccountDto implements Omit<Account, 'id'> {
  public email: string;
  public password: string;
  public roleId: string;
}
