import { GithubOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

type Props = {
  readonly onAuthWithGithub: () => void;
};

export const AuthFormView: React.FC<Props> = props => {
  return (
    <div>
      <Button onClick={props.onAuthWithGithub} icon={<GithubOutlined />}>
        Sign-in with GitHub
      </Button>
    </div>
  );
};
