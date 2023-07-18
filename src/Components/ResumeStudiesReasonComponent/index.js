import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Checkbox, Card, message, Divider, Select } from 'antd';
import { updateStudentResumeStudiesProgress } from '../../Data/Student';

const ResumeStudiesReasonComponent = (props) => {

    const [ reason, setReason ] = useState("");

    const onFinish = (values) => {
        updateStudentResumeStudiesProgress(
            props.resumeStudiesId,
            props.student_email,
            props.person,
            props.status,
            values.reason,
            (data) => {
                if(data.error){
                    message.error(data.message);
                }else{
                    message.success(data.message);
                }
            },
            (error) => {
                console.log(error);
            }
        );
    };
    return(
        <>
            <Card
                className="reject_reason_form"
                bordered={false}
                style={{top: "0px"}}
            >
                <Form
                    name="reject_reason"
                    className="reject_reason"
                    onFinish={onFinish}
                >
                    <Divider style={{color: "gray", fontSize:"14px"}}>Comment</Divider>
                    <Row gutter={[8, 4]}>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                name="reason"
                                rules={[{ required: false, message: 'Comment cannot be empty!' }]}
                            >
                                <Input.TextArea
                                    value={reason}
                                    onChange={e => setReason(e.target.value)}
                                    placeholder="Comment"
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>
                            <>
                                <Form.Item shouldUpdate>
                                    {() => (
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        style={{backgroundColor: "#48A64C", color: "white"}}
                                    >
                                        Submit
                                    </Button>
                                    )}
                                </Form.Item>
                            </>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </>
    );
};

export default ResumeStudiesReasonComponent;