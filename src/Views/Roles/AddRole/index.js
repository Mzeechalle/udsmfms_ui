import React, { useState, createRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card, Button, Form, Input, message } from 'antd';
import { addRole } from '../../../Data/Role';

const AddRole = () => {

    const history = useHistory();
    const [ role_id, setRoleID ] = useState("");
    const [ role_name, setRoleName ] = useState("");

    const [form] = Form.useForm();
    const formRef = createRef();

    const onFinish = () => {
        try{
            addRole(
                role_id,
                role_name,
                (data) => {
                    if(data.error){
                        message.error(data.message);
                    }else{
                        formRef.current.resetFields();
                        message.success(data.message);
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
        }catch(error){
            console.log(error);
        }
    };

    return(
        <>
            <Col xs={24} sm={12} md={6} lg={6}>
                <Card title="Add Role" bordered={true}>
                    <Form ref={formRef} form={form} onFinish={onFinish} layout="vertical">
                        <Row gutter={[8, 8]}>
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Form.Item
                                    label="Role ID"
                                    name="role_id"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Role ID cannot be empty!',
                                    },
                                    ]}
                                >
                                    <Input
                                        placeholder="Role ID"
                                        value={role_id}
                                        onChange={(e) => setRoleID(e.target.value)}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Form.Item
                                    label="Role name"
                                    name="role_name"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Role name cannot be empty!',
                                    },
                                    ]}
                                >
                                    <Input
                                        placeholder="Role name"
                                        value={role_name}
                                        onChange={(e) => setRoleName(e.target.value)}
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
                        </>
                    </Form>
                </Card>
            </Col>
        </>
    );
};

export default AddRole;