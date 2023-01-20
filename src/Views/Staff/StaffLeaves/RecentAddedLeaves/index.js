import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Tag, Space, Button, Row, Col, Card, Popconfirm, message, Badge, Result, Alert, Tooltip, Progress } from 'antd';
import {DeleteFilled, EyeOutlined, CheckOutlined, CloseOutlined, SmileOutlined, PrinterOutlined
} from '@ant-design/icons';
import { green, red } from '@ant-design/colors';
import { showDate, showProgressColorOfLeave, getResponse, showStatusProgressBar, getStrokeColor } from '../../../../Helpers/customFunctions'
import { deleteStaffLeaveRequest, getRecentStaffLeaves } from '../../../../Data/Staff';
import GeneratePDF from '../../../../Components/GeneratePDFComponent';

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
        title: <center><b>Progress</b></center>,
        key: 'progress',
        dataIndex: 'progress',
        children: [
            {
                title: <center>HoD</center>,
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
    }
];

const StaffLeaves = () => {

    const [ leaves, setLeaves ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        const fetchLeaves = async () => {
            setIsLoading(true);
            getRecentStaffLeaves(
                localStorage.getItem("token"),
                (data) => {
                    setLeaves(data.recentleaves);
                    setIsLoading(false);
                    console.log(data);
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
        <>
            {
                !isLoading ?
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
                <>
                    <div id="spinner"></div>
                </>
            }
        </>
    );
};

export default StaffLeaves;