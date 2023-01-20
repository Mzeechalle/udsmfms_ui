import React, { useState, createRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card, Button, Form, Input, message } from 'antd';
import { createCollege } from '../../../Data/College';

const AddCollege = () => {

    const history = useHistory();
    const [ college_name, setCollegeName ] = useState("");
    const [ college_abbrv, setAbbreviation ] = useState("");

    const [form] = Form.useForm();
    const formRef = createRef();

    const onFinish = (values) => {
        try{
            createCollege(
                values.college_name,
                values.college_abbrv,
                data => {
                    if(data.error){
                        message.error(data.message);
                    }else{
                        message.success(data.message);
                        formRef.current.resetFields();
                        history.goBack();
                    }
                },
                error => {
                    console.log(error);
                }
            );
        }catch(error){
            console.log(error);
        }
    }

    return(
        <>
            <Row gutter={[8, 8]}>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Card title="Add College/Unit/School/Institute" bordered={true}>
                        <Form ref={formRef} form={form} onFinish={onFinish} layout="vertical">
                            <Row gutter={[8, 8]}>
                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <Form.Item
                                        label="College/Unit/School/Institution Name"
                                        name="college_name"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Name cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Enter full name"
                                            value={college_name}
                                            onChange={(e) => setCollegeName(e.target.value)}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <Form.Item
                                        label="Abbreviation"
                                        name="college_abbrv"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Abbreviation cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Enter Abbreviation"
                                            value={college_abbrv}
                                            onChange={(e) => setAbbreviation(e.target.value)}
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

export default AddCollege;