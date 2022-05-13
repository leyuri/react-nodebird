import React, {useState, useCallback} from 'react'
import AppLayout from '../components/AppLayout';
import Head from 'next/head'
import {
    Input, Form, Checkbox, Button
  } from 'antd';
import styled from 'styled-components'
import useInput from '../hooks/useInput';

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {

    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');

    const [passwordChcek, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password])
    
    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onchangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false)
    })

    const onSubmit = useCallback(() => {
        if (password !== passwordChcek) {
            return setPasswordError(true)
        }
        if (!term) {
            return setTermError(true)
        }
        console.log(id, nickname, password)
    },[password, passwordChcek, term])

    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>회원가입 | NodeBird</title>
            </Head>
            <AppLayout>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor='user-id'>아이디</label>
                    <br />
                    <Input name="user-id" value={id} required onChange={onChangeId}/>
                </div>
                <div>
                    <label htmlFor='user-nickname'>닉네임</label>
                    <br />
                    <Input name="user-nickname" value={nickname} required onChange={onChangeNickname}/>
                </div>
                <div>
                    <label htmlFor='user-password'>비밀번호</label>
                    <br />
                    <Input type="password" name="user-password" value={password} required onChange={onChangePassword}/>
                </div>
                <div>
                    <label htmlFor='user-password-check'>비밀번호</label>
                    <br />
                    <Input
                        type="password"
                        name="user-password-check"
                        value={passwordChcek}
                        required
                        onChange={onChangePasswordCheck}
                    />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다. </ErrorMessage>}
                </div>
                <div>
                    <Checkbox
                        name="user-term"
                        checked={term}
                        onChange={onchangeTerm}
                    >
                        회원가입에 동의합니다. 
                    </Checkbox>
                    {termError && <ErrorMessage style={{color: 'red'}}>약관에 동의하셔야 합니다. </ErrorMessage>}
                </div>
                <div style={{marginTop: 10}}>
                    <Button type='primary' htmlType='submit'>가입하기</Button>
                </div>
            </Form>
            </AppLayout>

        </>

    );
}

export default Signup