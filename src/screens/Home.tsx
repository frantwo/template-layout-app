import React from 'react';
import { Layout, theme } from 'antd';

const { Content } = Layout;

export const Home: React.FC = () => {
    const {
    token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Content
            style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
        }}
        >
            <h1>Home done by Eng. Ops. team</h1>
        </Content>
    );
}