import { Button, Form, Input } from 'antd';
import React from 'react';

export const AuthFormView: React.FC = () => {
  return (
    <div>
      <Form autoComplete='off'>
        <Form.Item label='Username'>
          <Input name='username' />
        </Form.Item>
        <Form.Item label='Password'>
          <Input name='password' />
        </Form.Item>
        <Form.Item label={null}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
