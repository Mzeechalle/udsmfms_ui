import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Statistic, Card, Button, Tooltip } from 'antd';
import { countStudentPostponements } from '../../Data/Student';
import RecentAddedPostponements from '../../Views/Student/StudentPostponements/RecentAddedPostponements'


const StudentDashboard = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ total, setTotal ] = useState(0);
    const [ pending, setPending ] = useState(0);
    const [ approved, setApproved ] = useState(0);
    const [ rejected, setRejected ] = useState(0);


    useEffect(() => {
        const fetchPostponement = async () => {
            setIsLoading(true);

            countStudentPostponements(
                localStorage.getItem("token"),
                (data) => {
                    setTotal(data.total);
                    setPending(data.pending);
                    setApproved(data.approved);
                    setRejected(data.rejected);
                },
                (error) => {
                    console.log(error);
                }
            );
        };

        fetchPostponement();
    }, []);

    return(
        <>
            <Row gutter={[8, 8]} style={{ marginBottom: 8 }}>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Card title="Student Requests" bordered={true}>
                        <Row>
                            <Tooltip title="Total request applied">
                                <Col xs={8} sm={8} md={8} lg={8}>
                                    <Statistic title="Total Requests" value={total} />
                                </Col>
                            </Tooltip>
                            <Tooltip title="Total approved requests!">
                                <Col xs={8} sm={8} md={8} lg={8}>
                                    <Statistic title="Approved Requests" value={approved} />
                                </Col>
                            </Tooltip>
                            <Tooltip title="Total pending requests!">
                                <Col xs={8} sm={8} md={8} lg={8}>
                                    <Statistic title="Pending Requests" value={pending} />
                                </Col>
                            </Tooltip>
                            <Tooltip title="Total rejected requests!">
                                <Col xs={8} sm={8} md={8} lg={8}>
                                    <Statistic title="Rejected Requests" value={rejected} />
                                </Col>
                            </Tooltip>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Card title="Recent added Postponements" bordered={true} extra={<Link to="/mypostponements">View All</Link>} >
                        <RecentAddedPostponements/>
                    </Card>
                </Col>
                {/* <Col xs={24} sm={12} md={6} lg={6}>
                    <Card title="Payment History" bordered={true}>
                        Payment History
                    </Card>
                </Col> */}
            </Row>
        </>
    );
            }
//     return(
//         <h3>Student Dashboard</h3>
//     );
// };

export default StudentDashboard;