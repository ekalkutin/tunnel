import { ReactKeycloakProvider } from '@react-keycloak/web';

import { SignInPage } from 'pages/sign-in/sign-in.page';
import React from 'react';
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
