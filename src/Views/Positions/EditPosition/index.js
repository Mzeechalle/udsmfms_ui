import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card, Button, Form, Input, message } from 'antd';

const EditPosition = () => {

    const history = useHistory();

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };

    return(
        <>
            <Row gutter={[8, 8]}>
                <Col xs={24} sm={12} md={24} lg={24}>
                    <Card title="Edit Position" bordered={true}>
                        <Form form={form} onFinish={onFinish} layout="vertical">
                            <Row gutter={[8, 8]}>
                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <Form.Item
                                        label="Position ID"
                                        name="position_id"
                                    >
                                        <Input
                                            placeholder="Position ID"
                                            value=""
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <Form.Item
                                        label="Position name"
                                        name="position_name"
                                    >
                                        <Input
                                            placeholder="Position name"
                                            value=""
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

export default EditPosition;