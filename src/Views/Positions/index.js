import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, List, Skeleton, Popconfirm, message, Space, Table } from 'antd';
import {DeleteFilled,EditFilled
} from '@ant-design/icons';
import { getAllPositions, deletePosition } from '../../Data/Position';

import AddPosition from './AddPosition';

const columns = [
    {
        title: 'ID',
        dataIndex: 'pos_id',
        key: 'pos_id',
    },
    {
        title: 'Position Name',
        dataIndex: 'pos_name',
        key: 'pos_name',
        render: pos_name => <a>{pos_name}</a>
    },

    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
        <Space size="middle">
            <Link to="/editposition">
                <EditFilled style={{"color":"blue","fontSize":"16px", marginRight: 30}}/>
            </Link>
            <Popconfirm title="Sure to delete?" onConfirm={() => console.log("will be added a function")}>
                <DeleteFilled style={{"color":"red","fontSize":"16px"}}/>
            </Popconfirm>
        </Space>
        ),
    },
];

const Departments = () => {

    const [ positions, setPositions ] = useState([]);

    useEffect(() => {
        getAllPositions(
            (data) => {
                setPositions(data.positions);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    const deleteAPosition = () => {
        try{
            deletePosition(
                localStorage.getItem("pos_id"),
                (data) => {
                    if(data.error){
                        message.error(data.message);
                        return;
                    }
                    message.success(`${data.message}, ${data.no_users_deleted} users deleted!`);
                },
                (error) => {
                    console.log(error)
                }
            );
        }catch(error){
            console.log(error);
        }
    }

    return(
        <>
            <Row gutter={[8, 8]}>
                <Col xs={24} sm={12} md={6} lg={18}>
                    <Card title="Positions" bordered={true}>
                        <Table
                            columns={columns}
                            dataSource={positions}
                            pagination={false}
                            bordered
                        />
                    </Card>
                </Col>
                <AddPosition/>
            </Row>
        </>
    );
};

export default Departments;