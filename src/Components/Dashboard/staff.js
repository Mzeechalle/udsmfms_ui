import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Statistic, Card, Button, Tooltip } from 'antd';
import { getStaffLeaveBalance, countStaffLeaves } from '../../Data/Staff';
import RecentAddedLeaves from '../../Views/Staff/StaffLeaves/RecentAddedLeaves';

const StaffDashboard = () => {

    const [ balance, setBalance ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);
    const [ total, setTotal ] = useState(0);
    const [ pending, setPending ] = useState(0);

    useEffect(() => {
        const fetchLeaveBalance = async () => {
            setIsLoading(true);
            getStaffLeaveBalance(
                localStorage.getItem("user_id"),
                (data) => {
                    setIsLoading(false);
                    setBalance(data);
                    //console.log(data);
                },
                (error) => {
                    setIsLoading(false);
                    console.log(error);
                }
            );

            countStaffLeaves(
                localStorage.getItem("token"),
                (data) => {
                    setTotal(data.total);
                    setPending(data.pending);
                },
                (error) => {
                    console.log(error);
                }
            );
        };

        fetchLeaveBalance();
    }, []);

    return(
        <>
            <Row gutter={[8, 8]} style={{ marginBottom: 8 }}>
                <Col xs={24} sm={12} md={6} lg={12}>
                    <Card title="Leave Requests" bordered={true}>
                        <Row>
                            <Tooltip title="Total request applied">
                                <Col span={10}>
                                    <Statistic title="Total Requests" value={total} />
                                </Col>
                            </Tooltip>
                            <Tooltip title="Total pending requests!">
                                <Col span={10} offset={4}>
                                    <Statistic title="Pending Requests" value={pending} />
                                </Col>
                            </Tooltip>
                        </Row>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6} lg={12}>
                    <Card title="Leave Balance" bordered={true} >
                        <Row gutter={[8,8]}>
                        {
                !isLoading ?
                    balance ?
                    <>
                        <Tooltip title="Default days per year">
                            <Col xs={24} sm={8} md={8} lg={8}>
                                <Statistic title="Default days" value={balance.default_days} />
                            </Col>
                        </Tooltip>
                        <Tooltip title="Days accummulated (annually)">
                            <Col xs={24} sm={8} md={8} lg={8}>
                                <Statistic title="Days Taken" value={balance.days_taken} />
                            </Col>
                        </Tooltip>
                        <Tooltip title="Total number of days left">
                            <Col xs={24} sm={8} md={8} lg={8}>
                                <Statistic title="Days Left" value={balance.days_left} />
                            </Col>
                        </Tooltip>
                    </>
                    :
                    <center>
                        <span>Failed to display</span>
                    </center>
                
                :
                <>
                    <div id="spinner"></div>
                </>
            }
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Card title="Recent added Leaves" bordered={true} extra={<Link to="/myleaves">View All</Link>} >
                        <RecentAddedLeaves/>
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
};

export default StaffDashboard;