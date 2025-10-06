import { useKeycloak } from '@react-keycloak/web';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

const PrivateRoute: React.FC<Props> = props => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  return isLoggedIn ? props.children : null;
};

export default PrivateRoute;
