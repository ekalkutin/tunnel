import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { QueryAccountsDto, CreateAccountDto } from 'domain/dtos/account';
import { Account } from 'domain/entities';
import { AccountRepositoryPort } from 'domain/ports/repositories';

import { AccountMapper } from './account.mapper';
import { AccountDocument, AccountModel } from './account.model';

@Injectable()
export class AccountRepositoryAdapter implements AccountRepositoryPort {
  constructor(
    @InjectModel(AccountModel.name)
    private readonly model: Model<AccountDocument>,
  ) {}

  async create(createAcccountDto: CreateAccountDto): Promise<Account> {
    const item = await new this.model(createAcccountDto).save();
    return AccountMapper.toDomain(item);
  }

  async query(query: QueryAccountsDto): Promise<Account[]> {
    const items = await this.model
      .find({
        ...(query.email ? { email: query.email } : {}),
      })
      .exec();
    return items.map(AccountMapper.toDomain);
  }
  async save(data: Account): Promise<Account> {
    const { _id, ...account } = AccountMapper.toPersistence(data);
    void _id;
    const item = await this.model
      .findOneAndUpdate(
        {
          email: account.email,
        },
        account,
        {
          upsert: true,
          new: true,
        },
      )
      .exec();

    return AccountMapper.toDomain(item);
  }
}
