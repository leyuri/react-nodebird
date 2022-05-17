import React, { useCallback } from 'react';
import 'antd/dist/antd.css'
import {
    Card, Avatar, Button
} from 'antd';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers'
  
const UserProfile = () => {
    const dispatch = useDispatch()
    const onLogOut = useCallback(() => {
        dispatch(logoutAction())
    }, []);

    return (
           <Card
            actions={[
                <div key="twit">짹짹<br/>0</div>,
                <div key="followings">팔로잉<br/>0</div>,
                <div key="follower">팔로워<br/>0</div>
            ]}>
            <Card.Meta
                avatar={<Avatar>yuri</Avatar>}
                 title="yurilee"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
           </Card>
    )
}

export default UserProfile