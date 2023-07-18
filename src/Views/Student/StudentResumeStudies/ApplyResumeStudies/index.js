import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Card, Button, Form, Input, message, DatePicker } from 'antd';
import moment from 'moment';
import { createStudentResumeStudies } from '../../../../Data/Student';

const ApplyResumeStudies = () => {

    const history = useHistory();
    const [ subject, setSubject ] = useState("");
    const [ start_date, setStartDate ] = useState("");
    const [ end_date, setEndDate ] = useState("");
    const [ days_requested, setDaysRequested ] = useState("");

    const [form] = Form.useForm();

    const onFinish = (values) => {
        try{
            createStudentResumeStudies(
                localStorage.getItem("token"),
                localStorage.getItem("user_id"),
                subject,
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
        <Card title="Resume of Studies Application Form" bordered={true}>
            <Form form={form} onFinish={onFinish} layout="vertical">
                <Row gutter={[8, 8]}>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Form.Item
                            label="Subject"
                            name="subject"
                            rules={[
                                {
                                    required: true,
                                    message: 'Account Type cannot be empty!',
                                },
                                ]}
                        >
                            <Input
                                placeholder="Your reason for ResumeStudies"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
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

export default ApplyResumeStudies;