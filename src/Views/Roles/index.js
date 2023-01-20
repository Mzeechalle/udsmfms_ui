import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, List, Skeleton, Popconfirm, Space, Table, message } from 'antd';
import { getAllRoles, deleteRole } from '../../Data/Role';
import {DeleteFilled,EditFilled
} from '@ant-design/icons';

import AddRole from './AddRole';


const columns = [
    {
        title: 'Role ID',
        dataIndex: 'role_id',
        key: 'role_id',
    },
    {
        title: 'Role Name',
        dataIndex: 'role_name',
        key: 'role_name',
        render: role_name => <a>{role_name}</a>
    },

    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
        <Space size="middle">
            <Link to="/editrole">
                <EditFilled 
                    style={{"color":"blue","fontSize":"16px", marginRight: 30}}
                    onClick={() => {
                        localStorage.setItem("roleID", record.role_id);
                        localStorage.setItem("role_name", record.role_name);
                        localStorage.setItem("role_id", record._id);
                    }}
                />
            </Link>
            <Popconfirm 
                title="Sure to delete?" 
                onConfirm={() => {
                    deleteRole(
                        record._id,
                        (data) => {
                            if(data.error){
                                message.error(data.message);
                            }else{
                                message.success(`${data.message}, ${data.no_users_deleted} users affected.`);
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

const Roles = () => {

    const [ roles, setRoles ] = useState([]);

    useEffect(() => {
        getAllRoles(
            (data) => {
                setRoles(data.roles);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    return(
        <>
            <Row gutter={[8, 8]}>
                <Col xs={24} sm={12} md={6} lg={18}>
                    <Card title="Roles" bordered={true}>
                    <Table
                        columns={columns}
                        dataSource={roles}
                        pagination={false}
                    />
                    </Card>
                </Col>
                <AddRole/>
            </Row>
        </>
    );
};

export default Roles;