import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Statistic, Card, Button, List, Skeleton, Popconfirm } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined,
    EyeFilled, DeleteFilled,EditFilled, PlusOutlined
} from '@ant-design/icons';
import { showColor } from '../../Helpers/customFunctions';
import { getAllDepartments } from '../../Data/Department';

import ProgressBarComponent from '../../Components/ProgressBarComponent';

const Departments = () => {

    const [ departments, setDepartments ] = useState([]);

    useEffect(() => {
        getAllDepartments(
            (data) => {
                setDepartments(data.departments);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    return(
        <>
            <Row gutter={[8, 8]}>
                <Col xs={24} sm={12} md={6} lg={17}>
                    <Card title="Departments" bordered={true} extra={
                        <Link to="/adddepartment">
                            <Button type="link">
                                Add New
                            </Button>
                        </Link>
                        }
                    >
                        <List
                            className="demo-loadmore-list"
                            loading={false}
                            itemLayout="horizontal"
                            dataSource={departments}
                            renderItem={department => (
                            <List.Item
                                key={department._id}
                                actions={[
                                    <Link to="/editdepartment">
                                        <EditFilled 
                                            style={{"color":"blue","fontSize":"16px", marginRight: 30}}
                                            onClick={() => {
                                                localStorage.setItem("dept_id", department._id);
                                                localStorage.setItem("dept_name", department.dept_name);
                                                localStorage.setItem("dept_abbrv", department.dept_abbrv);
                                                localStorage.setItem("dept_hod", (department.dept_hod) == null ? "no value": department.dept_hod._id);
                                                localStorage.setItem("dept_secretary", (department.dept_secretary) == null ? "no value" : department.dept_secretary._id );
                                            }}
                                        />
                                    </Link>, 
                                    <Popconfirm title="Sure to delete?" onConfirm={() => console.log("will be added a function")}>
                                        <DeleteFilled style={{"color":"red","fontSize":"16px"}}/>
                                    </Popconfirm>
                                ]}
                            >
                                <Skeleton title={false} loading={false} active>
                                    <List.Item.Meta
                                        title={<a href="/"><b>{department.dept_name}</b></a>}
                                    />
                                </Skeleton>
                            </List.Item>
                            )}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6} lg={7}>
                    <Card title="Statistics" bordered={true}>
                        <Col xs={24} sm={8} md={8} lg={24}>
                            <h3 style={{fontWeight: "bold"}}>System Users</h3>
                            {
                                departments.map(department => (
                                    <ProgressBarComponent
                                        name={department.abbreviation}
                                        percent={department.userspercent} 
                                        strokeColor={showColor(department.userspercent)} 
                                        status="active" 
                                        style={{opacity:".9"}}
                                        showInfo={true}
                                    />
                                ))
                            }
                        </Col>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Departments;

//todo
/**
adding description as follows, to the list
description={
            <>
                <p><b>Abbreviation :</b>{department.dept_abbrv}</p>
                <p>
                    <b>Head :</b>
                    {`${department.dept_hod.staff.first_name} ${department.dept_hod.staff.middle_name} ${department.dept_hod.staff.last_name}`}
                </p>
                <p>
                    <b>Secretary :</b>
                    {`${department.dept_secretary.staff.first_name} ${department.dept_secretary.staff.middle_name} ${department.dept_secretary.staff.last_name}`}
                </p>
            </>
        }
 */