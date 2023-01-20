import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Tag, Space, Button, Row, Col, Card, Popconfirm, message, Badge, Result, Typography, Empty } from 'antd';
import {DeleteFilled, EyeOutlined, CheckOutlined, CloseOutlined, SmileOutlined
} from '@ant-design/icons';
import { getHoDAssignedStaffLeaves, getApprovedStaffLeaves, deleteStaffLeaveRequest } from '../../../../Data/Staff';
import { showDate } from '../../../../Helpers/customFunctions';

const columns = [
    {
        title: <center><b>Date</b></center>,
        dataIndex: 'created_at',
        key: 'created_at',
        render: date => {
            return (
                <center>
                    {showDate(date)}
                </center>
            );
        }
    },

    {
        title: <center><b>Applicant's Basic Details</b></center>,
        dataIndex: 'created_at',
        key: 'created_at',
        children: [
            {
                title: <center>Name</center>,
                key: 'name',
                dataIndex: 'creator',
                render: creator => {
                    return(
                        <a>
                            {`${creator.last_name}, ${creator.first_name} ${creator.middle_name}`}
                        </a>
                    )
                }
            },

            {
                title: <center>Email</center>,
                key: 'email',
                dataIndex: 'creator',
                render: creator => {
                    return(
                        <>
                            {creator.email}
                        </>
                    )
                }
            },

            {
                title: <center>Designation</center>,
                key: 'designation',
                dataIndex: 'creator',
                render: creator => {
                    return(
                        <>
                            {creator.position.pos_name}
                        </>
                    )
                }
            }
        ]
    },

    {
        title: <center><b>Leave Details</b></center>,
        key: 'leave_details',
        dataIndex: 'leave_details',
        children: [
            {
                title: <center>From</center>,
                key: "start_date",
                dataIndex: "start_date",
                render: start_date => {
                    return(
                        <Typography.Text code>
                            {start_date}
                        </Typography.Text>
                    )
                }
            },
            {
                title: <center>To</center>,
                key: "end_date",
                dataIndex: "end_date",
                render: end_date => {
                    return(
                        <Typography.Text code>
                            {end_date}
                        </Typography.Text>
                    )
                }
            },
            {
                title: <center>Days</center>,
                key: "days_requested",
                dataIndex: "days_requested",
                render: days => {
                    return (
                        <center>
                            <Badge
                                style={{backgroundColor: "#0899E6"}}
                                count={days}
                            />
                        </center>
                    );
                }
            }
        ]
    },

    {
        title: <center><b>Action</b></center>,
        key: 'action',
        render: (text, record) => (
            <center>
                <Link to="/viewleave" onClick={() => localStorage.setItem("leave_id", record._id)}>
                    <EyeOutlined style={{"color":"green","fontSize":"16px", marginRight: 30}}/>
                </Link>
                <Popconfirm 
                    title="Sure to delete?" 
                    onConfirm={() => {
                        deleteStaffLeaveRequest(
                            localStorage.getItem("token"),
                            record._id,
                            (data) => {
                                if(data.error){
                                    message.error(data.message);
                                }else{
                                    message.success(data.message);
                                }
                            },
                            (error) => {
                                console.log(error)
                            }
                        )
                    }}
                >
                    <DeleteFilled style={{"color":"red","fontSize":"16px"}}/>
                </Popconfirm>
            </center>
        ),
    },

];

const DVCReceivedStaffLeaves = () => {

    const [ approvedLeaves, setDVCAssignedLeaves ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        const fetchLeaves = async () => {
            setIsLoading(true);
            getApprovedStaffLeaves(
                "principal",
                (data) => {
                    setDVCAssignedLeaves(data.submitted);
                    setIsLoading(false);
                    console.log(data);
                },
                (error) => {
                    setIsLoading(false);
                    console.log(error);
                }
            );
        };
        fetchLeaves();
    }, []);

    return(
        <Card
            title="Submitted Leaves" 
            bordered={true}
        >
            {
                !isLoading ?
                    approvedLeaves.length > 0 ?
                    <Table
                        columns={columns}
                        dataSource={approvedLeaves}
                        bordered
                        pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 7,
                        }}
                    />
                    :
                    <center>
                        <Empty/>
                    </center>
                :
                <>
                    <div id="spinner"></div>
                </>
            }
        </Card>
    );
};

export default DVCReceivedStaffLeaves;