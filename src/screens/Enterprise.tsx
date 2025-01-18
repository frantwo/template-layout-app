import React from 'react';
import { Layout, theme } from 'antd';

const { Content } = Layout;

export const Enterprise: React.FC = () => {
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
            Example of private content page
        </Content>
    );
}