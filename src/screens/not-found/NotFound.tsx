import React from 'react';
import { Layout, theme } from 'antd';
import { Link } from 'react-router';

const { Content } = Layout;

export const NotFound: React.FC = () => {
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
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">Go back to the homepage</Link>
        </Content>
    );
}