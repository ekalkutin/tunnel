import React from 'react';

import styles from './styles.module.css';
import PrivateRoute from 'components/private-route/private-route';
import { useKeycloak } from '@react-keycloak/web';

export const SignInPage: React.FC = () => {
  const { keycloak, initialized } = useKeycloak();

  console.log({ initialized });

  if (!initialized) {
    return <div>Loading authentication…</div>;
  }

  if (!keycloak.authenticated) {
    return <button onClick={() => keycloak.login()}>Login</button>;
  }

  return (
    <div className={styles.container}>
      <PrivateRoute>
        <div>Private data</div>
      </PrivateRoute>

      <button onClick={() => keycloak.logout()}>Logout</button>
    </div>
  );
};
