import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Card, message, Divider, Spin } from 'antd';
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { useAuth } from "../../Authentication/auth-context";
import { login, getProfile, getUserLoggedInDetails } from '../../Data/Users';
import ModalComponent from "../../Components/ModalComponent";
import RegisterAccountModal from '../RegisterAccount';

const Login = () => {

    const { userLogin } = useAuth();

    const history = useHistory();

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    // const [ token, setToken ] = useState('');

    //setting the visibility of the register account modal
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    // const [ token, setToken ] = useState(localStorage.getItem("token"));

    const feedbackMessage = {
        success: () => {
            message.success("Logged in Success");
        },
        error: () => {
            message.error("Wrong username or password");
        }
    };

    //opening a modal
    const showModal = () => {
        setVisible(true);
    };

    //closing a modal
    const handleCancel = () => {
        setVisible(false);
    };

    const handleOk = () => {
        // setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const getUserProfile = () => {
        try{
            
            // console.log(localStorage.getItem("token"));
            getUserLoggedInDetails(
                localStorage.getItem("token"),
                (data) => {
                    console.log(data);
                },
                (error) => {
                    console.log(error);
                }
            );
        }catch(error){
            console.log(error);
        }
    }

    const onFinish = (values) => {
        try{
            setIsLoading(true);
            login(
                username,
                password,
                (data) => {
                    if(data.error){
                        console.log(data);
                        setIsLoading(false);
                        message.error(data.message);
                    }else{
                        setIsLoading(false);
                        message.success(data.message);
                        userLogin();
                        history.push("/dashboard");
                        console.log(data);
                        localStorage.setItem("isLoggedIn", true);
                        localStorage.setItem("hasProfile", data.has_profile);
                        localStorage.setItem("token", JSON.stringify(data.token));
                        localStorage.setItem("user_id", data.user_id);
                        localStorage.setItem("user_position", data.user_position);
                        localStorage.setItem("user_role", data.user_role);
                        localStorage.setItem("user_email", data.user_email);
                        localStorage.setItem("user_fullname", data.user_fullname);
                    }
                },
                (error) => {
                    setIsLoading(false);
                    message.error("Can't Connect to Server!");
                }
            );
        }catch(error){
            console.log(error);
        }
    };
    return(
        <>
            <div className='login-header'>
                <h1>UDSM FILE MANAGEMENT SYSTEM</h1>
            </div>
            <div className='login-bg'>
                <Card
                    className="login-box"
                    bordered={true}
                >
                    <center>
                        <img 
                            src="https://res.cloudinary.com/coictfms/image/upload/v1646578243/logoUnedited_ydfdae.png" 
                            className="logo-image-login"
                            alt='imagelogo'
                        />
                    </center>
                    <center>
                        <span style={{color: "#474747"}}>UDSM File Management System</span>
                    </center>
                    <Divider style={{color: "gray", fontSize:"14px"}}>Login</Divider>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Username cannot be empty!' }]}
                    >
                        <Input 
                            prefix={<UserOutlined className="site-form-item-icon" />} 
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Password cannot be empty!' }]}
                    >
                        <Input.Password
                            allowClear
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="/" style={{float: "right"}}>
                        Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            className="login-form-button"
                            style={{width: "100%"}}
                        >
                            {
                                !isLoading ?
                                    <>Log in</>
                                :
                                <>
                                    <Spin indicator={<LoadingOutlined style={{ fontSize: 18, color: "#ffffff" }} spin />}/>
                                </>
                            }
                        </Button>
                    </Form.Item>
                    </Form>
                    <Divider style={{color: "gray", fontSize:"14px"}}>Don't have an Account?</Divider>
                    <Button 
                        type="default"
                        htmlType="submit" 
                        className="login-form-button"
                        style={{width: "100%", backgroundColor: "#48A64C", color: "white", marginBottom: "5px"}}
                        onClick={showModal}
                    >
                        Register
                    </Button>
                    <ModalComponent
                        title={<h2 style={{color: "#2460CD", textAlign: "center"}}>Create Account</h2>}
                        modalText={<RegisterAccountModal/>}
                        handleCancel={handleCancel}
                        handleOk={handleOk}
                        confirmLoading={confirmLoading}
                        visible={visible}
                        style={{height: "40%"}}
                    />
                    <center>
                        <span style={{color: "gray", marginBottom: "5px"}}>
                            By continuing, you are confirming that you have read our 
                            <a className="login-form-forgot" href="/">
                                Terms &amp; Conditions
                            </a>
                        </span>
                    </center>
                </Card>
            </div>
        </>
    );
};

export default Login;