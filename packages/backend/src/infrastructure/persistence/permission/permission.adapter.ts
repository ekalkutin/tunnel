import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Permission } from 'domain/entities';
import { PermissionRepositoryPort } from 'domain/ports/repositories';

import { PermissionMapper } from './permission.mapper';
import { type PermissionDocument, PermissionModel } from './permission.model';

@Injectable()
export class PermissionRepositoryAdapter implements PermissionRepositoryPort {
  constructor(
    @InjectModel(PermissionModel.name)
    private readonly model: Model<PermissionDocument>,
  ) {}

  async query(): Promise<Permission[]> {
    const items = await this.model.find().exec();
    return items.map(PermissionMapper.toDomain);
  }

  async save(data: Permission): Promise<Permission> {
    const { _id, ...permission } = PermissionMapper.toPersistence(data);
    void _id;

    const item = await this.model.findOneAndUpdate(
      {
        code: permission.code,
      },
      {
        ...permission,
      },
      { upsert: true, new: true },
    );

    return PermissionMapper.toDomain(item);
  }
}
