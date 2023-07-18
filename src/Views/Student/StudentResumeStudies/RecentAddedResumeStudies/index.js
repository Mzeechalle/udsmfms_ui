import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Tag, Space, Button, Row, Col, Card, Popconfirm, message, Badge, Result, Alert, Tooltip, Progress } from 'antd';
import {DeleteFilled, EyeOutlined, CheckOutlined, CloseOutlined, SmileOutlined, PrinterOutlined
} from '@ant-design/icons';
import { green, red } from '@ant-design/colors';
import { showDate, showProgressColorOfPostponement, getResponse, showStatusProgressBar, getStrokeColor } from '../../../../Helpers/customFunctions'
import { deleteStudentResumeStudiesRequest, getRecentStudentResumeStudies } from '../../../../Data/Student';
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
                            <Tag color={showProgressColorOfPostponement(hod)}>
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
                            <Tag color={showProgressColorOfPostponement(principal)}>
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
                            <Tag color={showProgressColorOfPostponement(dvc)}>
                                {dvc.toUpperCase()}
                            </Tag>
                        </center>
                    );
                }
            }
        ]
    }
];

const StudentResumeStudies = () => {

    const [ resumeStudies, setResumeStudies ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        const fetchResumeStudies = async () => {
            setIsLoading(true);
            getRecentStudentResumeStudies(
                localStorage.getItem("token"),
                (data) => {
                    setResumeStudies(data.recentresumeStudies);
                    setIsLoading(false);
                    console.log(data);
                },
                (error) => {
                    setIsLoading(false);
                    console.log(error);
                }
            );
        }

        fetchResumeStudies();
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
                        dataSource={resumeStudies}
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

export default StudentResumeStudies;