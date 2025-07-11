interface RootAccountEnv {
  readonly ADMIN_EMAIL: string;
  readonly ADMIN_PASSWORD: string;
}

interface DatabaseEnv {
  readonly DB_USERNAME: string;
  readonly DB_PASSWORD: string;
  readonly DB_NAME: string;
  readonly DB_HOST: string;
  readonly DB_PORT: string;
}

export interface EnvironmentConfig extends RootAccountEnv, DatabaseEnv {}
