import React, { useState, useEffect, createRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Card, Button, Form, Input, message, Select } from 'antd';
import { GroupOutlined
} from '@ant-design/icons';
import SelectStaff from '../../../Components/SelectStaff';
import { getStaffUsers } from '../../../Data/Users';
import { getColleges } from '../../../Data/College';
import { createDepartment } from '../../../Data/Department';

const AddDepartment = () => {

    const [ staffusers, setStaffUsers ] = useState([]);
    const [ hodusers, setHoDUsers ] = useState([]);
    const [ departmentName, setDepartmentName ] = useState('');
    const [ departmentHoD, setDepartmentHoD ] = useState('');
    const [ departmentSecretary, setDepartmentSecretary ] = useState('');
    const [ departmentAbbreviation, setDepartmentAbbreviation ] = useState('');
    const [ college, setCollege ] = useState("");
    const [ colleges, setColleges ] = useState([]);

    const history = useHistory();

    const [form] = Form.useForm();
    const formRef = createRef();

    useEffect(() => {
        getStaffUsers(
            "HoD",
            data => {
                if(data.error){
                    message.error(data.message);
                }else{
                    setHoDUsers(data.users);
                }
            },
            error => {
                console.log(error);
            }
        );

        getStaffUsers(
            "Staff",
            data => {
                if(data.error){
                    message.error(data.message);
                }else{
                    setStaffUsers(data.users);
                }
            },
            error => {
                console.log(error);
            }
        );

        getColleges(
            data => {
                if(data.error){
                    message.error(data.message);
                }else{
                    setColleges(data.colleges);
                }
            },
            error => {
                console.log(error);
            }
        );
    }, []);

    const onFinish = (values) => {
        try{
            createDepartment(
                values.college,
                values.dept_name,
                values.dept_abbrv,
                values.dept_hod,
                values.dept_secretary,
                (data) => {
                    if(data.error){
                        message.error(data.message);
                    }else{
                        message.success(data.message);
                        formRef.current.resetFields();
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
    };

    return(
        <>
            <Row gutter={[8, 8]}>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Card title="Add Department" bordered={true}>
                        <Form ref={formRef} form={form} onFinish={onFinish} layout="vertical">
                            <Row gutter={[8, 8]}>
                                <Col xs={24} sm={6} md={6} lg={6}>
                                    <Form.Item
                                        label="College/Unit/School"
                                        name="college"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'This cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Select 
                                            style={{ width: "100%" }} 
                                            placeholder="Select from Colleges"
                                            value={college}
                                            onChange={(value) => setCollege(value)}
                                        >
                                            {
                                                colleges.length > 0 ?
                                                    colleges.map(college => (
                                                        <Select.Option value={college._id} key={colleges.indexOf(college)}>{college.college_abbrv}</Select.Option>
                                                    ))
                                                : <p>Loading...</p>
                                            }
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={10}>
                                    <Form.Item
                                        label="Department name"
                                        name="dept_name"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Department name cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Department name"
                                            value={departmentName}
                                            onChange={(e) => setDepartmentName(e.target.value)}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={8}>
                                    <Form.Item
                                        label="Abbreviation"
                                        name="dept_abbrv"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Abbreviation cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Abbreviation"
                                            value={departmentAbbreviation}
                                            onChange={(e) => setDepartmentAbbreviation(e.target.value)}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[8, 8]}>
                                <Col xs={24} sm={12} md={12} lg={16}>
                                    <Form.Item
                                        label="Head of Department"
                                        name="dept_hod"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'HoD cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Select 
                                            style={{ width: "100%" }} 
                                            placeholder="Select from HoDs"
                                            value={departmentHoD}
                                            onChange={(value) => setDepartmentHoD(value)}
                                        >
                                            {
                                                hodusers.length > 0 ?
                                                hodusers.map(hod => (
                                                        <Select.Option value={hod._id} key={hodusers.indexOf(hod)}>{`${hod.last_name}, ${hod.first_name} ${hod.middle_name}`}</Select.Option>
                                                    ))
                                                : <p>Loading...</p>
                                            }
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={8}>
                                    <Form.Item
                                        label="Secretary"
                                        name="dept_secretary"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Secretary cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Select 
                                            style={{ width: "100%" }} 
                                            placeholder="Select from Staff"
                                            value={departmentSecretary}
                                            onChange={(value) => setDepartmentSecretary(value)}
                                        >
                                            {
                                                staffusers.length > 0 ?
                                                    staffusers.map(staffuser => (
                                                        <Select.Option value={staffuser._id} key={staffusers.indexOf(staffuser)}>{`${staffuser.last_name}, ${staffuser.first_name} ${staffuser.middle_name}`}</Select.Option>
                                                    ))
                                                : <p>Loading...</p>
                                            }
                                        </Select>
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

export default AddDepartment;