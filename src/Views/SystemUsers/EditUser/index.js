import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Card, Button, Form, Input, message } from 'antd';
import { LockOutlined
} from '@ant-design/icons';

import SelectPosition from '../../../Components/SelectPosition';
import SelectRole from '../../../Components/SelectRole';

const EditUser = () => {

    const history = useHistory();

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };

    return(
        <>
            <Row gutter={[8, 8]}>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Card title="Add User" bordered={true}>
                        <Form form={form} onFinish={onFinish} layout="vertical">
                            <Row gutter={[8, 8]}>
                                <Col xs={24} sm={12} md={12} lg={16}>
                                    <Form.Item
                                        label="Account Type"
                                        name="pos_name"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Account Type cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <SelectPosition
                                            placeholder="Select from Positions"
                                            value=""
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={8}>
                                    <Form.Item
                                        label="Role"
                                        name="role_name"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Role cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <SelectRole
                                            placeholder="Select from Roles"
                                            value=""
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[8, 8]}>
                                <Col xs={24} sm={8} md={8} lg={8}>
                                    <Form.Item
                                        label="Firstname"
                                        name="first_name"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Firstname cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Enter Firstname"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={8} md={8} lg={8}>
                                    <Form.Item
                                        label="Middlename"
                                        name="middle_name"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Middlename cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Enter Middlename"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={8} md={8} lg={8}>
                                    <Form.Item
                                        label="Lastname"
                                        name="last_name"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Lastname cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Enter Lastname"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[8, 8]}>
                                <Col xs={24} sm={12} md={12} lg={16}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Email cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Enter valid Email"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={8}>
                                    <Form.Item
                                        label="Password"
                                        name="password"
                                    >
                                        <Input.Password
                                            allowClear 
                                            type="password"
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            placeholder="Default Password is Surname"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <>
                                <Form.Item shouldUpdate>
                                    {() => (
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        style={{backgroundColor: "#48A64C", color: "white"}}
                                    >
                                        SAVE
                                    </Button>
                                    )}
                                </Form.Item>
                                <Form.Item shouldUpdate>
                                    {() => (
                                    <Button 
                                        type="danger"
                                        onClick={() => history.goBack()}
                                        
                                    >
                                        CANCEL
                                    </Button>
                                    )}
                                </Form.Item>
                            </>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default EditUser;