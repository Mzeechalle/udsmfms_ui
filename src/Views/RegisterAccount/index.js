import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Checkbox, Card, message, Divider, Select } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { registerUser } from '../../Data/Users';
import SelectComponent from '../../Components/SelectComponent';

const { Option } = Select;
const RegisterAccountModal = () => {

    const [ position, setPosition ] = useState('');
    const [ firstname, setFirstName ] = useState('');
    const [ middlename, setMiddleName ] = useState('');
    const [ lastname, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isPasswordMatch, setIsPasswordMatch ] = useState(false);
    const [ feedback, setFeedback ] = useState('');

    const onSelectChange = (value) => {
        setPosition(value);
    };

    const validateConfirmPassword = (value) => {
        if(password === value){
            setFeedback('success');
            setIsPasswordMatch(true);
        }else{
            setFeedback('error');
            setIsPasswordMatch(false);
        }
    }

    const onFinish = (values) => {
        try{
            registerUser(
                firstname,
                middlename,
                lastname,
                email,
                password,
                1,
                position,
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
        }catch(error){
            console.log(error);
        }
    };
  
    return(
        <>
            <Card
                className="register-form-box"
                bordered={false}
                style={{top: "0px"}}
            >
                <Form
                    name="normal_register"
                    className="register-form"
                    onFinish={onFinish}
                >
                    <Divider style={{color: "gray", fontSize:"14px"}}>Basic Information</Divider>
                    <Row gutter={[8, 4]}>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                name="Account_Type"
                                rules={[{ required: true, message: 'Please choose account type!' }]}
                            >
                                <SelectComponent 
                                    style={{ width: "100%" }}
                                    placeholder="Select Account Type"
                                    value={position}
                                    onChange={onSelectChange}
                                >
                                    <Option value="1">Staff Account</Option>
                                    <Option value="2">Student Account</Option>
                                </SelectComponent>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Form.Item
                                name="firstname"
                                rules={[{ required: true, message: 'Firstname cannot be empty!' }]}
                            >
                                <Input 
                                    prefix={<UserOutlined className="site-form-item-icon" />} 
                                    placeholder="Firstname"
                                    value={firstname}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Form.Item
                                name="middlename"
                                rules={[{ required: true, message: 'Middlename cannot be empty!' }]}
                            >
                                <Input 
                                    prefix={<UserOutlined className="site-form-item-icon" />} 
                                    placeholder="Middlename"
                                    value={middlename}
                                    onChange={(e) => setMiddleName(e.target.value)}
                                    
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Form.Item
                                name="lastname"
                                rules={[{ required: true, message: 'Lastname cannot be empty!' }]}
                            >
                                <Input 
                                    prefix={<UserOutlined className="site-form-item-icon" />} 
                                    placeholder="Lastname"
                                    value={lastname}
                                    onChange={(e) => setLastName(e.target.value)}
                                    
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider style={{color: "gray", fontSize:"14px"}}>Your Credentials</Divider>
                    <Row gutter={[8, 4]}>
                        <Col xs={24} sm={12} md={24} lg={24}>
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Email cannot be empty!' }]}
                            >
                                <Input
                                    allowClear 
                                    type="email"
                                    prefix={<UserOutlined className="site-form-item-icon" />} 
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12}>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Password cannot be empty!' }]}
                            >
                                <Input.Password
                                    allowClear 
                                    type="password"
                                    prefix={<LockOutlined className="site-form-item-icon" />} 
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12}>
                            <Form.Item
                                hasFeedback={isPasswordMatch}
                                name="confirm_password"
                                rules={[{ required: true, message: 'Password cannot be empty!' }]}
                                validateStatus={feedback}
                                
                            >
                                <Input.Password
                                    allowClear 
                                    type="password"
                                    prefix={<LockOutlined className="site-form-item-icon" />} 
                                    placeholder="Confirm Password"
                                    onChange={(e) => validateConfirmPassword(e.target.value)}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item>
                                <Form.Item 
                                    name="remember" 
                                    valuePropName="checked"
                                    rules={[{ required: true, message: 'Should Accept the Terms & Conditions' }]} 
                                    noStyle
                                >
                                    <Checkbox>Accept our&nbsp;
                                        <a className="terms" href="/">
                                            Terms &amp; Conditions
                                        </a>
                                    </Checkbox>
                                </Form.Item>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button 
                        type="default"
                        htmlType="submit" 
                        className="login-form-button"
                        style={{width: "100%", backgroundColor: "#48A64C", color: "white", marginBottom: "5px"}}
                    >
                        Register
                    </Button>
                </Form>
            </Card>
        </>
    );
}

export default RegisterAccountModal;