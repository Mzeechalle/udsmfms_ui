import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Tag, Space, Button, Row, Col, Card, Popconfirm, message, Badge, Result, Alert, Tooltip, Progress } from 'antd';
import {DeleteFilled, EyeOutlined, CheckOutlined, CloseOutlined, SmileOutlined, PrinterOutlined
} from '@ant-design/icons';
import { green, red } from '@ant-design/colors';
import { showDate, showProgressColorOfLeave, getResponse, showStatusProgressBar, getStrokeColor } from '../../../Helpers/customFunctions';
import { getStaffLeaves, deleteStaffLeaveRequest, updateStaffLeaveProgress } from '../../../Data/Staff';
import GeneratePDF from '../../../Components/GeneratePDFComponent';

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
        title: <center><b>Days requested</b></center>,
        dataIndex: 'days_requested',
        key: 'days_requested',
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
    },

    {
        title: <center><b>Status</b></center>,
        key: 'response',
        dataIndex: 'response',
        render: response => {
            let color = (response == "submitted") ? '#D8B206' : '#35A003';
            return (
                <center>
                    <Tag color={color}>
                        {response.toUpperCase()}
                    </Tag>
                </center>
            );
        }
    },

    {
        title: <center><b>Progress</b></center>,
        key: 'progress',
        dataIndex: 'progress',
        children: [
            {
                title: <center>Head</center>,
                key: "hod",
                dataIndex: "hod",
                render: hod => {
                    let status = hod ? 
                    <CheckOutlined style={{color: "white", fontSize: "11px", backgroundColor: "#3FAD05", borderRadius: "100px", padding: "4px"}} /> 
                    : <CloseOutlined style={{color: "white", fontSize: "11px", backgroundColor: "#F21616", borderRadius: "100px", padding: "4px"}} />;
                    return (
                        <center>
                            <Tag color={showProgressColorOfLeave(hod)}>
                                {hod.toUpperCase()}
                            </Tag>
                        </center>
                    );
                }
            },
            {
                title: <center>Principal</center>,
                key: "principal",
                dataIndex: "principal",
                render: principal => {
                    let status = principal ? 
                    <CheckOutlined style={{color: "white", fontSize: "11px", backgroundColor: "#3FAD05", borderRadius: "100px", padding: "4px"}} /> 
                    : <CloseOutlined style={{color: "white", fontSize: "11px", backgroundColor: "#F21616", borderRadius: "100px", padding: "4px"}} />;
                    return (
                        <center>
                            <Tag color={showProgressColorOfLeave(principal)}>
                                {principal.toUpperCase()}
                            </Tag>
                        </center>
                    );
                }
            },
            {
                title: <center>DVC - Academic</center>,
                key: "dvc",
                dataIndex: "dvc",
                render: dvc => {
                    let status = dvc ? 
                    <CheckOutlined style={{color: "white", fontSize: "11px", backgroundColor: "#3FAD05", borderRadius: "100px", padding: "4px"}} /> 
                    : <CloseOutlined style={{color: "white", fontSize: "11px", backgroundColor: "#F21616", borderRadius: "100px", padding: "4px"}} />;
                    return (
                        <center>
                            <Tag color={showProgressColorOfLeave(dvc)}>
                                {dvc.toUpperCase()}
                            </Tag>
                        </center>
                    );
                }
            }
        ]
    },

    {
        title: <center><b>Action</b></center>,
        key: 'action',
        render: (text, record) => {
            if(record.hod === "approved" && record.principal === "approved" && record.dvc === "approved"){
                return (
                    <center>
                        <Link to="/viewleave">
                            <EyeOutlined 
                                style={{"color":"green","fontSize":"16px", marginRight: 30}}
                                onClick={() => localStorage.setItem("leave_id", record._id)}
                            />
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
                        <GeneratePDF leaveId={record._id}/>
                    </center>
                );
            }else{
                return (
                    <center>
                        <Link to="/viewleave">
                            <EyeOutlined 
                                style={{"color":"green","fontSize":"16px", marginRight: 30}}
                                onClick={() => localStorage.setItem("leave_id", record._id)}
                            />
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
                );
            }
        }
    },
];

const StaffLeaves = () => {

    const [ leaves, setLeaves ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);
  
  // Values should be only date
  const VALUES = ["2021-01-01", "2021-01-15", "2021-03-22"];
  
  // Description array corresponding to values
  const description = [
    "The event of 1 Jan 2021 : Happy New Year",
    "The event of 15 Jan 2021 : Festival",
    "The event of 22 March 2021 : Board Exam",
  ];

    useEffect(() => {
        const fetchLeaves = async () => {
            setIsLoading(true);
            getStaffLeaves(
                localStorage.getItem("token"),
                (data) => {
                    setLeaves(data.leaverequests);
                    setIsLoading(false);
                    //console.log(data.leaverequests);
                },
                (error) => {
                    setIsLoading(false);
                    console.log(error);
                }
            );
        }

        fetchLeaves();
    }, []);

    return (
        <Card
            title="My Leaves" 
            bordered={true} 
            extra={
                <Link to="/applyleave" style={{"float":"right"}}>
                    {
                        localStorage.getItem("hasProfile") === 'true' ?
                        <Button type="primary">Apply</Button>
                        : <Button type="primary" disabled>Apply</Button>
                    }
                </Link>
            }
        >
            {
                !isLoading ?
                    leaves.length > 0 ?
                    <Table
                        columns={columns}
                        expandable={{
                            expandedRowRender: (record) => {
                                return(
                                    <Progress 
                                        percent={getResponse(record.hod, record.principal, record.dvc)}
                                        status={showStatusProgressBar(record)}
                                        strokeColor={getStrokeColor(record)}
                                        strokeWidth={6}
                                        size="small"
                                        style={{width: 400}}
                                    />
                                )
                            }
                          }}
                        // onRow={(record, index) => {
                        //     return {
                        //         onClick: event => {
                        //             console.log(record);
                        //         }
                        //     }
                        // }}
                        rowKey={(record) => record._id}
                        dataSource={leaves}
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
                        {
                            localStorage.getItem("hasProfile") === 'false' ?
                            <Result
                                icon={<SmileOutlined style={{color: "red"}}/>}
                                title="You have to create a Profile first!"
                            />
                            :
                            <Result
                                icon={<SmileOutlined style={{color: "red"}}/>}
                                title="You have never applied for a Leave!"
                                extra={
                                    <Link to="/applyleave">
                                        <Button type="primary">Apply Now</Button>
                                    </Link>
                                }
                            />
                        }
                    </center>
                
                :
                <>
                    <div id="spinner"></div>
                </>
            }
        </Card>
    );
};

export default StaffLeaves;