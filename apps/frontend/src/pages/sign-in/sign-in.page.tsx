import React from 'react';
import { AuthFormContainer } from './auth-form/auth-form.container';

import styles from './styles.module.css';

export const SignInPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <AuthFormContainer />
    </div>
  );
};
