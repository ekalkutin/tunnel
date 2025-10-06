import React from 'react';
import { AuthFormView } from './auth-form.vew';
import { useKeycloak } from '@react-keycloak/web';

export const AuthFormContainer: React.FC = () => {
  const { keycloak } = useKeycloak();

  const authWithGithub = () => {
    keycloak.login({ idpHint: 'github' });
  };

  return <AuthFormView onAuthWithGithub={authWithGithub} />;
};
