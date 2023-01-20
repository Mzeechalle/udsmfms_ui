import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Card, Button, Form, Input, message, Select } from 'antd';
import { GroupOutlined
} from '@ant-design/icons';
import SelectStaff from '../../../Components/SelectStaff';
import { getStaffUsers } from '../../../Data/Users';
import { updateDepartment } from '../../../Data/Department';

const EditDepartment = () => {

    const [ staffusers, setStaffUsers ] = useState([]);
    const [ hodusers, setHoDUsers ] = useState([]);
    const [ departmentName, setDepartmentName ] = useState(localStorage.getItem("dept_name"));
    const [ departmentHoD, setDepartmentHoD ] = useState(localStorage.getItem("dept_hod"));
    const [ departmentSecretary, setDepartmentSecretary ] = useState(localStorage.getItem("dept_secretary"));
    const [ departmentAbbreviation, setDepartmentAbbreviation ] = useState(localStorage.getItem("dept_abbrv"));

    const history = useHistory();

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(departmentName);
        console.log(departmentAbbreviation);
        console.log(departmentHoD);
        console.log(departmentSecretary);
        console.log(localStorage.getItem("dept_id"));
        // try{
        //     updateDepartment(
        //         localStorage.getItem("dept_id"),
        //         departmentName,
        //         departmentAbbreviation,
        //         departmentHoD,
        //         departmentSecretary,
        //         (data) => {
        //             if(data.error){
        //                 message.error(data.message);
        //             }else{
        //                 message.success(data.message);
        //                 history.goBack();
        //             }
        //         },
        //         (error) => {
        //             console.log(error);
        //         }
        //     );
        // }catch(error){
        //     console.log(error);
        // }
    };

    useEffect(() => {
        getStaffUsers(
            "HoD",
            data => {
                if(data.error){
                    message.error(data.message);
                }else{
                    // console.log(localStorage.getItem("dept_abbrv"));
                    // console.log(departmentName);
                    setHoDUsers(data.users);
                }
            },
            error => {
                console.log(error);
            }
        );

        getStaffUsers(
            "Secretary",
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
    }, []);

    return(
        <>
            <Row gutter={[8, 8]}>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Card title="Edit Department" bordered={true}>
                        <Form form={form} onFinish={onFinish} layout="vertical">
                            <Row gutter={[8, 8]}>
                                <Col xs={24} sm={12} md={12} lg={16}>
                                    <Form.Item
                                        label="Department name"
                                        name="dept_name"
                                    >
                                        <Input
                                            placeholder={departmentName}
                                            value={departmentName}
                                            onChange={(e) => setDepartmentName(e.target.value)}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={8}>
                                    <Form.Item
                                        label="Abbreviation"
                                        name="dept_abbrv"
                                    >
                                        <Input 
                                            placeholder={departmentAbbreviation}
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

export default EditDepartment;