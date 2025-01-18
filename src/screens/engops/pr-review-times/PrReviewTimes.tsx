import React from 'react';
import { Button, Form, Input, Space, Layout, theme } from 'antd';

const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const PrReviewTimes: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({ 
            token: 'token', 
            repo: 'repo',
            org: 'org',
            creatorTeam: 'creatorTeam',
            allowedteams: 'allowedteams',
            outputDir: 'outputDir',
            outputFormat: 'outputFormat',
        });
    };

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
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
            >
                <Form.Item name="token" label="Token" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="repo" label="GitHub Repository" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="org" label="Organization" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="creatorTeam" label="Creator Team" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="allowedteams" label="Allowed Teams" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="outputDir" label="Output Directory" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="outputFormat" label="Output Format" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Space>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                    <Button type="link" htmlType="button" onClick={onFill}>
                        Fill form
                    </Button>
                    </Space>
                </Form.Item>
            </Form>     
        </Content>
    );
};