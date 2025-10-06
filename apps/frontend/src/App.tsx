import { ReactKeycloakProvider } from '@react-keycloak/web';
import React from 'react';

import { SignInPage } from 'pages/sign-in/sign-in.page';

import { initOptions, keycloak } from './providers/keycloak';

export const App: React.FC = () => {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak} initOptions={initOptions}>
        <SignInPage />
      </ReactKeycloakProvider>
    </div>
  );
};
