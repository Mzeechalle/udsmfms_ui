import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card, Button, Form, Input, message } from 'antd';
import { updateRole } from '../../../Data/Role';

const EditRole = () => {

    const history = useHistory();
    const [ role_id, setRoleID ] = useState(localStorage.getItem("roleID"));
    const [ role_name, setRoleName ] = useState(localStorage.getItem("role_name"));

    const [form] = Form.useForm();

    const onFinish = (values) => {
        try{
            updateRole(
                localStorage.getItem("role_id"),
                values.role_id,
                values.role_name,
                (data) => {
                    if(data.error){
                        message.error(data.message);
                    }else{
                        history.goBack();
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
        <Row Row gutter={[8, 8]}>
            <Col xs={24} sm={12} md={24} lg={24}>
                <Card title="Edit Role" bordered={true}>
                    <Form form={form} onFinish={onFinish} layout="vertical">
                        <Row gutter={[8, 8]}>
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Form.Item
                                    label="Role ID"
                                    name="role_id"
                                    initialValue={role_id}
                                >
                                    <Input
                                        placeholder="Role ID"
                                        defaultValue={role_id}
                                        onChange={(e) => setRoleID(e.target.value)}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Form.Item
                                    label="Role name"
                                    name="role_name"
                                    initialValue={role_name}
                                >
                                    <Input
                                        placeholder="Role name"
                                        defaultValue={role_name}
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
                                    UPDATE
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
    );
};

export default EditRole;