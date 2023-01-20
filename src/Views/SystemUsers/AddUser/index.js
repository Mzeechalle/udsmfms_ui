import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Card, Button, Form, Input, message, Select, Spin } from 'antd';
import { LockOutlined, LoadingOutlined
} from '@ant-design/icons';
import { registerUser } from '../../../Data/Users';
import { getAllPositions } from '../../../Data/Position';
import { getAllRoles } from '../../../Data/Role';

const AddUser = () => {

    const history = useHistory();
    const [ positions, setPositions ] = useState([]);
    const [ roles, setRoles ] = useState([]);
    const [ position, setPosition ] = useState("");
    const [ role, setRole ] = useState("");
    const [ first_name, setFirstName ] = useState("");
    const [ middle_name, setMiddleName ] = useState("");
    const [ last_name, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    useEffect(() => {
        getAllPositions(
            (data) => {
                setPositions(data.positions);
            },
            (error) => {
                console.log(error);
            }
        );

        getAllRoles(
            (data) => {
                setRoles(data.roles);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    const [form] = Form.useForm();

    const onFinish = (values) => {
        try{
            registerUser(
                values.first_name,
                values.middle_name,
                values.last_name,
                values.email,
                values.password,
                values.role,
                values.position,
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
        <>
            <Row gutter={[8, 8]}>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Card title="Add User" bordered={true}>
                        <Form form={form} onFinish={onFinish} layout="vertical">
                            <Row gutter={[8, 8]}>
                                <Col xs={24} sm={12} md={12} lg={16}>
                                    <Form.Item
                                        label="Account Type"
                                        name="position"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Account Type cannot be empty!',
                                        },
                                        ]}
                                    >
                                        {/* <SelectPosition
                                            placeholder="Select from Positions"
                                            value={position}
                                        /> */}
                                        <Select 
                                            style={{ width: "100%" }} 
                                            placeholder="Select from Positions"
                                            value={position} 
                                            onChange={(e) => setPosition(e)}
                                        >
                                            {
                                                positions.length > 0 ?
                                                    positions.map(position => (
                                                        <Select.Option value={position._id}>{`${position.pos_name} Account`}</Select.Option>
                                                    ))
                                                :
                                                <center>
                                                    <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }}/>}/>
                                                </center>
                                            }
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={8}>
                                    <Form.Item
                                        label="Role"
                                        name="role"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Role cannot be empty!',
                                        },
                                        ]}
                                    >
                                        {/* <SelectRole
                                            placeholder="Select from Roles"
                                            value={role}
                                            onSelectItemChange={onSelectRole}
                                        /> */}
                                        <Select 
                                            style={{ width: "100%" }} 
                                            placeholder="Select from Roles"
                                            value={role} 
                                            onChange={(e) => setRole(e)}
                                        >
                                            {
                                                roles.length > 0 ?
                                                    roles.map(role => (
                                                        <Select.Option value={role._id}>{role.role_name.toUpperCase()}</Select.Option>
                                                    ))
                                                :
                                                <center>
                                                    <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }}/>}/>
                                                </center>
                                            }
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[8, 8]}>
                                <Col xs={24} sm={8} md={8} lg={8}>
                                    <Form.Item
                                        label="Firstname"
                                        name="first_name"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Firstname cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Enter Firstname"
                                            value={first_name}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={8} md={8} lg={8}>
                                    <Form.Item
                                        label="Middlename"
                                        name="middle_name"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Middlename cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Enter Middlename"
                                            value={middle_name}
                                            onChange={(e) => setMiddleName(e.target.value)}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={8} md={8} lg={8}>
                                    <Form.Item
                                        label="Lastname"
                                        name="last_name"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Lastname cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Enter Lastname"
                                            value={last_name}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[8, 8]}>
                                <Col xs={24} sm={12} md={12} lg={16}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Email cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Enter valid Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={8}>
                                    <Form.Item
                                        label="Password"
                                        name="password"
                                    >
                                        <Input.Password
                                            allowClear 
                                            type="password"
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            placeholder="Default Password is Surname"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
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

export default AddUser;