import React, { useState, useCallback } from 'react';
import {
    Input, Button, Form
  } from 'antd';
import 'antd/dist/antd.css'
import Link from 'next/link'
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user'

const LoginForm = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const dispatch = useDispatch();
  
    const onSubmitForm = useCallback(() => {
      dispatch(loginAction({
        id,
        password,
      }));
    }, [id, password]);
  
    return (
      <Form onFinish={onSubmitForm} style={{ padding: '10px' }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
        </div>
        <div style={{ marginTop: '10px' }}>
          <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
          <Link href="/signup"><a><Button>회원가입</Button></a></Link>
        </div>
      </Form>
    );
};

LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired
}

export default LoginForm