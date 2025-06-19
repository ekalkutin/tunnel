import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Role } from 'domain/entities';
import { RoleRepositoryPort } from 'domain/ports/repositories';

import { RoleMapper } from './role.mapper';
import { RoleDocument, RoleModel } from './role.model';

@Injectable()
export class RoleRepositoryAdapter implements RoleRepositoryPort {
  constructor(
    @InjectModel(RoleModel.name) private readonly model: Model<RoleDocument>,
  ) {}

  async query(): Promise<Role[]> {
    const items = await this.model.find().populate('permissions').exec();
    return items.map(RoleMapper.toDomain);
  }

  async save(data: Role): Promise<Role> {
    const { _id, code, ...rest } = RoleMapper.toPersistence(data);
    const item = await this.model.findOneAndUpdate(
      {
        $or: [{ _id }, { code }],
      },
      {
        code,
        ...rest,
      },
      { upsert: true, new: true },
    );
    return RoleMapper.toDomain(item);
  }
}
