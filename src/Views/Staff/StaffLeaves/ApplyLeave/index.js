import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Card, Button, Form, Input, message, DatePicker } from 'antd';
import moment from 'moment';
import { createStaffLeave } from '../../../../Data/Staff';

const ApplyLeave = () => {

    const history = useHistory();
    const [ subject, setSubject ] = useState("");
    const [ start_date, setStartDate ] = useState("");
    const [ end_date, setEndDate ] = useState("");
    const [ days_requested, setDaysRequested ] = useState("");

    const [form] = Form.useForm();

    const onFinish = (values) => {
        try{
            createStaffLeave(
                localStorage.getItem("token"),
                localStorage.getItem("user_id"),
                subject,
                start_date,
                end_date,
                (data) => {
                    if(data.error){
                        //console.log(data);
                        message.error(data.message);
                    }else{
                        //console.log(data);
                        message.success(data.message);
                        history.goBack();
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
        }catch(error){
            console.log(error);
        }
    }

    return(
        <>
        <Card title="Leave Application Form" bordered={true}>
            <Form form={form} onFinish={onFinish} layout="vertical">
                <Row gutter={[8, 8]}>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Form.Item
                            label="Subject"
                            name="subject"
                        >
                            <Input
                                placeholder="Your reason for Leave"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Starting date"
                            name="start_date"
                            rules={[
                            {
                                required: true,
                                message: 'Date of birth cannot be empty!',
                            },
                            ]}
                        >
                            <DatePicker
                                defaultValue={moment()}
                                style={{"width": "100%"}}
                                value={start_date}
                                onChange={(date, dateString) => setStartDate(dateString)}
                                disabledDate={current => {
                                    return current && current < moment();
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Expiring date"
                            name="end_date"
                            rules={[
                            {
                                required: true,
                                message: 'Date of birth cannot be empty!',
                            },
                            ]}
                        >
                            <DatePicker
                                style={{"width": "100%"}}
                                value={end_date}
                                onChange={(date, dateString) => setEndDate(dateString)}
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
                            SUBMIT
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
        </>
    );
};

export default ApplyLeave;