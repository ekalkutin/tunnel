import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  CreateAccountDto,
  QueryAccountsDto,
} from 'features/account/domain/dto';
import { Account } from 'features/account/domain/models';
import { AccountRepositoryPort } from 'features/account/domain/ports';

import { AccountEntity } from './account.entity';
import { AccountMapper } from './account.mapper';

@Injectable()
export class AccountRepositoryAdapter implements AccountRepositoryPort {
  constructor(
    @InjectModel(AccountEntity.name)
    private readonly model: Model<AccountEntity>,
  ) {}

  public async query(query?: QueryAccountsDto): Promise<Account[]> {
    const entities = await this.model.find({
      ...query,
    });

    return entities.map(AccountMapper.toDomain);
  }

  public async create(account: CreateAccountDto): Promise<Account> {
    const entity = await new this.model(account).save();
    return AccountMapper.toDomain(entity);
  }

  public async getById(id: string): Promise<Account> {
    const entity = await this.model.findById(id).exec();
    if (entity) return AccountMapper.toDomain(entity);
    throw new Error('Entity not found');
  }

  public async deleteById(id: string): Promise<Account> {
    const entity = await this.model.findByIdAndUpdate(id).exec();
    if (entity) return AccountMapper.toDomain(entity);
    throw new Error('Entity not found');
  }
}
