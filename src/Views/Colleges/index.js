import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, List, Skeleton, Popconfirm, message, Space, Table, Button, Spin } from 'antd';
import {DeleteFilled,EditFilled
} from '@ant-design/icons';
import { getColleges } from '../../Data/College';


const columns = [
    {
        title: <b>College name</b>,
        dataIndex: 'college_name',
        key: 'college_name',
        render: college_name => <a>{college_name}</a>
    },
    {
        title: <center><b>Abbreviation</b></center>,
        dataIndex: 'college_abbrv',
        key: 'college_abbrv',
        render: college_abbrv => <center>{college_abbrv}</center>
    },

    {
        title: <center><b>Action</b></center>,
        key: 'action',
        render: (text, record) => (
            <center>
                <Space size="middle">
                    <Link to="/editposition">
                        <EditFilled style={{"color":"blue","fontSize":"16px", marginRight: 30}}/>
                    </Link>
                    <Popconfirm title="Sure to delete?" onConfirm={() => console.log("will be added a function")}>
                        <DeleteFilled style={{"color":"red","fontSize":"16px"}}/>
                    </Popconfirm>
                </Space>
            </center>
        ),
    },
];

const Colleges = () => {

    const [ colleges, setColleges ] = useState([]);

    useEffect(() => {
        getColleges(
            data => {
                if(data.error){
                    message.error(data.message);
                }else{
                    setColleges(data.colleges);
                }
            },
            error => {
                console.log(error);
            }
        );
    }, []);

    return(
        <>
            <Row gutter={[8, 8]}>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Card 
                        title="Colleges" 
                        bordered={true}
                        extra={
                            <Link to="/addcollege">
                                <Button type="link">
                                    Add New
                                </Button>
                            </Link>
                        }
                    >
                        {
                            colleges.length > 0 ?
                            <Table
                                columns={columns}
                                dataSource={colleges}
                                pagination={{
                                    onChange: page => {
                                        console.log(page);
                                    },
                                    pageSize: 6,
                                }}
                                bordered
                            />
                            : <center><Spin tip="Getting Colleges..."/></center>
                            
                        }
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Colleges;