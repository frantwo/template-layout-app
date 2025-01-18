import React from 'react';
import { Button, Form, Input } from 'antd';
import { useStore } from '../../context/useStore';
import type { FormProps } from 'antd';

import logoPicture from '../../../public/sparta-main-logo.svg';
import './login.css';

type FieldType = {
    username?: string;
    password?: string;
    role?: string;
};

export const Login: React.FC = () => {
    const { login } = useStore();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        login({ username: values.username || '', password: values.password || '' });
    };
      
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    return (
        <div id='login-container'>
            <div id='login-wrapper'>
                <div id='logo-wrapper'>
                    <img src={logoPicture} id='logoLogin' alt="logoPicture" />
                </div>
                <Form
                    layout='vertical'
                    name='login-form'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item<FieldType>
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder="Email" className="custom-input" />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" className="custom-input"/>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
)}