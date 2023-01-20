import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Statistic, Card, Button } from 'antd';
import StudentsPieChart from "../PieChartComponent/students";
import StaffPieChart from '../PieChartComponent/staff';
import BarChartComponent from "../BarChartComponent/requests"
import { countUsersByPosition } from '../../Data/Users';

//admin dashboard
const AdminDashboard = () => {

    const [ staffUsers, setStaffUsers ] = useState(0);
    const [ studentUsers, setStudentUsers ] = useState(0);

    useEffect(() => {
        
        countUsersByPosition(
            "Staff",
            (data) => {
                setStaffUsers(data.users);
            },
            (error) => {
                console.log(error);
            }
        );

        countUsersByPosition(
            "Student",
            (data) => {
                setStudentUsers(data.users);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);
    return(
        <>
            <Row gutter={[8, 8]}>
                <Col xs={24} sm={12} md={6} lg={12}>
                    <Card title="System Users" bordered={true} extra={<Link to="/">View</Link>}>
                        <Row>
                            <Col span={10}>
                                <Statistic title="Staff" value={staffUsers} />
                            </Col>
                            <Col span={10} offset={4}>
                                <Statistic title="Students" value={studentUsers} />
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6} lg={12}>
                    <Card title="Positions" bordered={true} extra={<Link to="/">View</Link>} >
                        <Row gutter={[8,8]}>
                            <Col xs={24} sm={8} md={8} lg={8}>
                                <Statistic title="Staff" value={staffUsers} />
                            </Col>
                            <Col xs={24} sm={8} md={8} lg={8}>
                                <Statistic title="Student" value={studentUsers} />
                            </Col>
                            <Col xs={24} sm={8} md={8} lg={8}>
                                <Statistic title="Admin" value={2} />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col xs={24} sm={12} md={6} lg={12}>
                    <Card title="Applications Summary" bordered={true} extra={<Link to="/">View</Link>} >
                        <BarChartComponent/>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6}>
                    <Card title="Staff" bordered={true} extra={<Link to="/">View</Link>}>
                        <StaffPieChart width={100} height={300}/>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6}>
                    <Card title="Students" bordered={true} extra={<Link to="/">View</Link>}>
                        <StudentsPieChart/>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default AdminDashboard;