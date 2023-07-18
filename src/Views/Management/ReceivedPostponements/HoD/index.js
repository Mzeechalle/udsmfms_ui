import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Tag, Space, Button, Row, Col, Card, Popconfirm, message, Badge, Result, Typography, Empty } from 'antd';
import {DeleteFilled, EyeOutlined, CheckOutlined, CloseOutlined, SmileOutlined
} from '@ant-design/icons';
import { getHoDAssignedStudentPostponements, deleteStudentPostponementRequest } from '../../../../Data/Student';
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
        title: <center><b>Action</b></center>,
        key: 'action',
        render: (text, record) => (
            <center>
                <Link to="/viewpostponement">
                    <EyeOutlined 
                    style={{"color":"green","fontSize":"16px", marginRight: 30}}
                    onClick={() => localStorage.setItem("postponement_id", record._id)}
                    />
                </Link>
                <Popconfirm 
                    title="Sure to delete?" 
                    onConfirm={() => {
                        deleteStudentPostponementRequest(
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

const HODReceivedStudentPostponements = () => {

    const [ hodStudentPostponements, setHoDAssignedPostponements ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        const fetchPostponements = async () => {
            setIsLoading(true);
            getHoDAssignedStudentPostponements(
                (data) => {
                    setHoDAssignedPostponements(data.submitted);
                    setIsLoading(false);
                    //console.log(data);
                },
                (error) => {
                    setIsLoading(false);
                    console.log(error);
                }
            );
        };
        fetchPostponements();
    }, []);

    return(
        <Card
            title="Submitted Postponements" 
            bordered={true}
        >
            {
                !isLoading ?
                hodStudentPostponements.length > 0 ?
                    <Table
                        columns={columns}
                        dataSource={hodStudentPostponements}
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

export default HODReceivedStudentPostponements;