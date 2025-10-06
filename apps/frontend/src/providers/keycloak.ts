import Keycloak from 'keycloak-js';

export const keycloak = new Keycloak({
  url: 'https://keycloak.kalkutin.dev',
  realm: 'tunnel',
  clientId: 'web-client',
});

export const initOptions = {
  flow: 'standard',
  pkceMethod: 'S256',
  checkLoginIframe: true,
  checkLoginIframeInterval: 30,
  enableLogging: true,
};
