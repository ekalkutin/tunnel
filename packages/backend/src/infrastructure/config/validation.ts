import Joi, { ObjectSchema } from 'joi';

import { type EnvironmentConfig } from './environment.interface';

const ENV_VALIDATION_SCHEMA: ObjectSchema<EnvironmentConfig> = Joi.object({
  ADMIN_EMAIL: Joi.string().required(),
  ADMIN_PASSWORD: Joi.string().required(),

  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(27017),
  DB_PASSWORD: Joi.string().required(),
  DB_USERNAME: Joi.string().default('root'),
  DB_NAME: Joi.string().default('tunnel'),
});

export default ENV_VALIDATION_SCHEMA;
