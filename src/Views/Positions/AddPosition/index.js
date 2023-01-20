import React, { useState, createRef } from 'react';
import { Row, Col, Card, Button, Form, Input, message } from 'antd';
import { createPosition } from '../../../Data/Position';

const AddPosition = () => {

    const [ positionID, setPositionID ] = useState('');
    const [ positionName, setPositionName ] = useState('');

    const [form] = Form.useForm();
    const formRef = createRef();

    const onFinish = () => {
        try{
            createPosition(
                parseInt(positionID),
                positionName,
                (data) => {
                    if(data.error){
                        message.error(data.message)
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
                <Card title="Add Position" bordered={true}>
                    <Form ref={formRef} form={form} onFinish={onFinish} layout="vertical">
                        <Row gutter={[8, 8]}>
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Form.Item
                                    label="Position ID"
                                    name="position_id"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Position ID cannot be empty!',
                                    },
                                    ]}
                                >
                                    <Input
                                        placeholder="Position ID"
                                        value={positionID}
                                        onChange={(e) => setPositionID(e.target.value)}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Form.Item
                                    label="Position name"
                                    name="position_name"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Position name cannot be empty!',
                                    },
                                    ]}
                                >
                                    <Input
                                        placeholder="Position name"
                                        value={positionName}
                                        onChange={(e) => setPositionName(e.target.value)}
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

export default AddPosition;