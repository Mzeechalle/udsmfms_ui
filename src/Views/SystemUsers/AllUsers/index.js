import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Table, Tag, Space, Button, Row, Col, Card, Popconfirm, message, Empty } from 'antd';
import { getAllUsers, deleteUser } from '../../../Data/Users';
import {DeleteFilled,EditFilled
} from '@ant-design/icons';

const columns = [
    {
        title: 'Firstname',
        dataIndex: 'first_name',
        key: 'first_name',
        render: name => <a>{name}</a>,
    },
    {
        title: 'Middlename',
        dataIndex: 'middle_name',
        key: 'middle_name',
    },
    {
        title: 'Lastname',
        dataIndex: 'last_name',
        key: 'last_name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Status',
        key: 'isLoggedin',
        dataIndex: 'isLoggedin',
        render: isLoggedin => {
            let status = isLoggedin ? 'Online' : 'Offline';
            let color = isLoggedin ? 'green' : 'volcano';
            return(
                <Tag color={color}>
                    {status}
                </Tag>
            )
        }
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
        <Space size="middle">
            <Link to="/edituser">
                <EditFilled style={{"color":"blue","fontSize":"16px", marginRight: 30}}/>
            </Link>
            <Popconfirm 
                title="Sure to delete?" 
                onConfirm={() => {
                    deleteUser(
                        record._id,
                        (data) => {
                            if(data.error){
                                message.error(data.message)
                            }else{
                                message.success(data.message);
                            }
                        },
                        (error) => {
                            console.log(error);
                        }
                    );
                }}
            >
                <DeleteFilled style={{"color":"red","fontSize":"16px"}}/>
            </Popconfirm>
        </Space>
        ),
    },
];

const preloading = () => (
    <div class="lds-dual-ring"></div>
  );

const SystemUsers = () => {

    const [ users, setUsers ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        const fetchUsers = () => {
            setIsLoading(true);
            getAllUsers(
                (data) => {
                    setUsers(data.users);
                    setIsLoading(false);
                },
    
                (error) => {
                    setIsLoading(false);
                    console.log(error);
                }
            );
        };

        fetchUsers();

    }, []);
    return (
        <>
            {
                !isLoading ?
                    users.length > 0 ?
                    <Table
                        columns={columns}
                        dataSource={users}
                        pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 6,
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
        </>
    );
};

export default SystemUsers;

//todo
/**
fetching and using the users from the db, and map them to the table
 */