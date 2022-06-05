import React from 'react';
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd'
import {
    Input,
    Col,
    Row,
  } from 'antd';
import 'antd/dist/antd.css'
import styled from 'styled-components'
import UserProfile from './UserProfile'
import LoginForm from './LoginForm'
import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  .ant-row{
      margin-right: 0!important;
      margin-left: 0!important;
  }
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  .ant-col:last-child {
      padding-right: 0 !important;
  }
`

const SearchInput = styled(Input.Search)`
    verticalAlign: 'middle'
`;
const AppLayout = ({ children }) => {
    const { isLoggedIn } = useSelector((state) => state.user)

    return (
        <>
            <Global />
            <Menu mode='horizontal'>
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu> 
            <Row gutter={8}>
            <Col xs={24} md={6}>
                {isLoggedIn ? <UserProfile /> : <LoginForm />}

                </Col>
                <Col xs={24} md={12}>
                {children}

                </Col>
                <Col xs={24} md={6}>
                    <a href="https://velog.io/@leyuri" target="_blank" rel="noreferrer noopener">Made by yuri</a>
            </Col>
            </Row>
        </>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout