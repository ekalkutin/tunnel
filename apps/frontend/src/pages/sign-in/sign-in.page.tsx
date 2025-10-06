import React from 'react';

import styles from './styles.module.css';
import PrivateRoute from 'components/private-route/private-route';
import { useKeycloak } from '@react-keycloak/web';
import { AuthFormContainer } from './components/auth-form.container';

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
