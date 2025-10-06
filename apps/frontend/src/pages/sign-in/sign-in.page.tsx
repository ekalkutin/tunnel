import { useKeycloak } from '@react-keycloak/web';
import React from 'react';

import PrivateRoute from 'components/private-route/private-route';

import { AuthFormContainer } from './components/auth-form.container';
import styles from './styles.module.css';

export const SignInPage: React.FC = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <div className={styles.container}>
      {!initialized && <div>Loading authentication…</div>}
      {!keycloak.authenticated && <AuthFormContainer />}
      {keycloak.authenticated && (
        <PrivateRoute>
          <div>Private data</div>
          <button onClick={() => keycloak.logout()}>Logout</button>
        </PrivateRoute>
      )}
    </div>
  );
};
