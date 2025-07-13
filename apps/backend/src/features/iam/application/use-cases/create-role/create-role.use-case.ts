import { Inject, Injectable } from '@nestjs/common';

import { Role, RoleRepositoryPort } from 'features/iam/domain/role';

type Input = {
  readonly code: string;
  readonly title: string;
  readonly description?: string;
};

@Injectable()
export class CreateRoleUseCase {
  constructor(
    @Inject(RoleRepositoryPort)
    private readonly roleRepository: RoleRepositoryPort,
  ) {}

  public async execute(input: Input): Promise<Role> {
    const role = await this.roleRepository.save(
      Role.create({
        code: input.code,
        title: input.title,
        description: input.description,
      }),
    );

    return role;
  }
}
