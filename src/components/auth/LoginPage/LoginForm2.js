import React from 'react';
import styles from './LoginForm.module.css';
import { Button, Checkbox, Input } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import LoginHOC from './LoginHOC';

const LoginForm = ({ email, password, remember, handleChange, handleSubmit,canSubmit }) => (

  <form onSubmit={handleSubmit}>
      <Input
        name="email"
        className={styles.input}
        prefix={<MailOutlined />}
        placeholder="Email"
        onChange={handleChange}
        value={email}
      />
      <Input.Password
        name="password"
        className={styles.input}
        prefix={<LockOutlined />}
        placeholder="Password"
        onChange={handleChange}
        value={password}
      />
      <Checkbox
        name="remember"
        className={styles.input}
        onChange={handleChange}
        checked={remember}
      >
        Remember me
      </Checkbox>
      <Button type="primary" htmlType="submit" disabled={!canSubmit()} block>
        Log In
      </Button>
    </form>
);

export default (LoginHOC(LoginForm));