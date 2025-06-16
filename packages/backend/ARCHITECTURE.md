# Clean Architecture with Feature-Sliced Design - Implementation Guide

## Overview

This document provides guidelines for implementing new features following Clean Architecture principles with Feature-Sliced Design (FSD) methodology. The architecture enforces clear separation of concerns and maintains dependency inversion through well-defined layers.

## Architecture Layers

### 1. Domain Layer (`domain/`)

**Purpose**: Contains business logic, entities, and use cases. This is the core of the application.

**Dependencies**: No dependencies on external frameworks or infrastructure.

**Structure**:

```
domain/
├── domain.module.ts       # NestJS module configuration
├── models/               # Domain entities/models
├── ports/               # Abstract interfaces for external dependencies
├── queries/            # Query objects for data retrieval
└── use-cases/         # Business logic implementations
```

### 2. Application Layer (`application/`)

**Purpose**: Handles application concerns like API routing, DTOs, and user interface adapters.

**Dependencies**: Depends only on the domain layer.

**Structure**:

```
application/
├── application.module.ts  # NestJS module configuration
└── rest/                 # REST API implementation
    ├── controllers/      # API controllers
    └── dto/             # Data Transfer Objects
```

### 3. Infrastructure Layer (`infrastructure/`)

**Purpose**: Implements technical concerns like database access, external APIs, and framework-specific code.

**Dependencies**: Depends on domain layer (implements ports).

**Structure**:

```
infrastructure/
├── infrastructure.module.ts  # NestJS module configuration
└── adapters/               # Concrete implementations of domain ports
```

## Implementation Steps

### Step 1: Create Feature Module Structure

Create the following directory structure for your new feature:

```
src/modules/{feature-name}/
├── domain/
│   ├── domain.module.ts
│   ├── models/
│   │   ├── index.ts
│   │   └── {feature}.model.ts
│   ├── ports/
│   │   ├── index.ts
│   │   └── {feature}-repository.port.ts
│   ├── queries/
│   │   ├── index.ts
│   │   └── {feature}.query.ts
│   └── use-cases/
│       └── {feature}/
│           ├── index.ts
│           ├── create-{feature}.use-case.ts
│           ├── find-{feature}.use-case.ts
│           └── delete-{feature}.use-case.ts
├── application/
│   ├── application.module.ts
│   └── rest/
│       ├── controllers/
│       │   ├── index.ts
│       │   └── {feature}.controller.ts
│       └── dto/
│           ├── index.ts
│           ├── create-{feature}.dto.ts
│           └── query-{feature}.dto.ts
└── infrastructure/
    ├── infrastructure.module.ts
    └── adapters/
        ├── index.ts
        └── {feature}-repository.adapter.ts
```

### Step 2: Implement Domain Layer

#### 2.1 Create Domain Model

```typescript
// domain/models/{feature}.model.ts
import { {Feature} as Prisma{Feature}Model } from '@prisma/client';

export type {Feature} = Prisma{Feature}Model;
```

#### 2.2 Create Repository Port

```typescript
// domain/ports/{feature}-repository.port.ts
import { {Feature} } from '../models';
import { Query{Feature} } from '../queries';

export abstract class {Feature}RepositoryPort {
  abstract create(data: Omit<{Feature}, 'id' | 'createdAt' | 'updatedAt'>): Promise<{Feature}>;
  abstract find(query?: Query{Feature}): Promise<{Feature}[]>;
  abstract deleteById(id: number): Promise<{Feature}>;
}
```

#### 2.3 Create Query Object

```typescript
// domain/queries/{feature}.query.ts
export class Query{Feature} {
  // Add query parameters as needed
  public readonly name?: string;
  public readonly code?: string;
}
```

#### 2.4 Create Use Cases

```typescript
// domain/use-cases/{feature}/create-{feature}.use-case.ts
import { Inject, Injectable } from '@nestjs/common';

import { {Feature} } from '../../models';
import { {Feature}RepositoryPort } from '../../ports';

@Injectable()
export class Create{Feature}UseCase {
  constructor(@Inject({Feature}RepositoryPort) private readonly repository: {Feature}RepositoryPort) {}

  public async execute(data: Omit<{Feature}, 'id' | 'createdAt' | 'updatedAt'>) {
    return await this.repository.create(data);
  }
}
```

#### 2.5 Create Domain Module

```typescript
// domain/domain.module.ts
import { Module } from '@nestjs/common';

import { InfrastructureModule } from '../infrastructure/infrastructure.module';

import { Create{Feature}UseCase, Delete{Feature}UseCase, Find{Feature}UseCase } from './use-cases/{feature}';

@Module({
  imports: [InfrastructureModule],
  providers: [Create{Feature}UseCase, Find{Feature}UseCase, Delete{Feature}UseCase],
  exports: [Create{Feature}UseCase, Find{Feature}UseCase, Delete{Feature}UseCase],
})
export class DomainModule {}
```

### Step 3: Implement Infrastructure Layer

#### 3.1 Create Repository Adapter

```typescript
// infrastructure/adapters/{feature}-repository.adapter.ts
import { Inject, Injectable } from '@nestjs/common';

import { PrismaService } from 'infrastructure/database';
import { {Feature} } from 'modules/{feature}/domain/models';
import { {Feature}RepositoryPort } from 'modules/{feature}/domain/ports';
import { Query{Feature} } from 'modules/{feature}/domain/queries';

@Injectable()
export class {Feature}RepositoryAdapter implements {Feature}RepositoryPort {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async create(data: Omit<{Feature}, 'id' | 'createdAt' | 'updatedAt'>): Promise<{Feature}> {
    return this.prisma.{featureLower}.create({
      data,
    });
  }

  async find(query?: Query{Feature}): Promise<{Feature}[]> {
    const where: any = {};

    // Build where clause based on query parameters
    if (query?.name) {
      where.name = query.name;
    }

    return this.prisma.{featureLower}.findMany({
      where,
    });
  }

  async deleteById(id: number): Promise<{Feature}> {
    return this.prisma.{featureLower}.delete({
      where: { id },
    });
  }
}
```

#### 3.2 Create Infrastructure Module

```typescript
// infrastructure/infrastructure.module.ts
import { Module } from '@nestjs/common';

import { DatabaseModule } from 'infrastructure/database';

import { {Feature}RepositoryPort } from '../domain/ports';

import { {Feature}RepositoryAdapter } from './adapters';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: {Feature}RepositoryPort,
      useClass: {Feature}RepositoryAdapter,
    },
  ],
  exports: [{Feature}RepositoryPort],
})
export class InfrastructureModule {}
```

### Step 4: Implement Application Layer

#### 4.1 Create DTOs

```typescript
// application/rest/dto/create-{feature}.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

import { {Feature} } from 'modules/{feature}/domain/models';

export class Create{Feature}Dto implements Omit<{Feature}, 'id' | 'createdAt' | 'updatedAt'> {
  @ApiProperty()
  @IsString()
  readonly name: string;

  // Add other properties as needed
}
```

#### 4.2 Create Controller

```typescript
// application/rest/controllers/{feature}.controller.ts
import { Body, Controller, Delete, Get, Inject, Param, Post, Query } from '@nestjs/common';

import { Create{Feature}UseCase, Delete{Feature}UseCase, Find{Feature}UseCase } from 'modules/{feature}/domain/use-cases/{feature}';

import { Create{Feature}Dto, Query{Feature}Dto } from '../dto';

@Controller('/v1/{feature-kebab}')
export class {Feature}Controller {
  constructor(
    @Inject(Find{Feature}UseCase) private readonly find{Feature}: Find{Feature}UseCase,
    @Inject(Create{Feature}UseCase) private readonly create{Feature}: Create{Feature}UseCase,
    @Inject(Delete{Feature}UseCase) private readonly delete{Feature}: Delete{Feature}UseCase,
  ) {}

  @Get('/')
  async find(@Query() query: Query{Feature}Dto) {
    return this.find{Feature}.execute(query);
  }

  @Post('/')
  async create(@Body() data: Create{Feature}Dto) {
    return this.create{Feature}.execute(data);
  }

  @Delete('/:id')
  async deleteById(@Param('id') id: string) {
    return this.delete{Feature}.execute(Number(id));
  }
}
```

#### 4.3 Create Application Module

```typescript
// application/application.module.ts
import { Module } from '@nestjs/common';

import { DomainModule } from '../domain/domain.module';

import { {Feature}Controller } from './rest/controllers';

@Module({
  imports: [DomainModule],
  controllers: [{Feature}Controller],
})
export class {Feature}ApplicationModule {}
```

### Step 5: Register Feature in Main App

Add your feature module to the main application:

```typescript
// src/app.module.ts
import { {Feature}ApplicationModule } from 'modules/{feature}/application/application.module';

@Module({
  imports: [
    // ...other modules...
    {Feature}ApplicationModule,
  ],
  // ...
})
export class AppModule {}
```

## Best Practices

### 1. Dependency Direction

- **Domain** should not depend on Application or Infrastructure
- **Application** should only depend on Domain
- **Infrastructure** should only depend on Domain

### 2. Naming Conventions

- Use PascalCase for classes and interfaces
- Use kebab-case for URLs and file names
- Use camelCase for variables and methods
- Feature names should be singular (e.g., `user`, not `users`)

### 3. Port/Adapter Pattern

- Define abstract ports in the domain layer
- Implement concrete adapters in the infrastructure layer
- Use dependency injection to wire them together

### 4. Use Cases

- Each use case should represent a single business operation
- Keep use cases focused and cohesive
- Inject repository ports, not concrete implementations

### 5. Error Handling

- Use domain-specific exceptions
- Handle errors at the appropriate layer
- Don't leak infrastructure concerns to domain

### 6. Testing Strategy

- Unit test use cases with mocked repositories
- Integration test repository adapters with real database
- E2E test controllers with full application context

## Index Files

Always create index files for clean imports:

```typescript
// domain/models/index.ts
export * from './{feature}.model';

// domain/ports/index.ts
export * from './{feature}-repository.port';

// domain/use-cases/{feature}/index.ts
export * from './create-{feature}.use-case';
export * from './find-{feature}.use-case';
export * from './delete-{feature}.use-case';
```

## Example Implementation Reference

Refer to the `src/modules/sku/` directory for a complete implementation example following this architecture pattern.

## Validation Rules

1. Domain layer files should not import from application or infrastructure layers
2. Use cases should only inject abstract ports, never concrete adapters
3. Controllers should only call use cases, never repositories directly
4. DTOs should validate input data and implement domain model interfaces when appropriate
5. Repository adapters should implement the corresponding domain ports

This architecture ensures maintainable, testable, and scalable code by enforcing clear boundaries and dependency inversion principles.
