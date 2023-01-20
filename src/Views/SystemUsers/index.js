import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Tag, Space, Button, Row, Col, Card, Popconfirm } from 'antd';
import {DeleteFilled,EditFilled
} from '@ant-design/icons';
import AllUsers from "./AllUsers";

const SystemUsers = () => {
    return (
        <Row gutter={[8, 8]}>
            <Col xs={24} sm={24} md={24} lg={24}>
                <Card title="System Users" bordered={true} extra={
                    <Link to="/adduser">
                        <Button type="link">
                            Add New
                        </Button>
                    </Link>
                    }
                >
                    <AllUsers/>
                </Card>
            </Col>
        </Row>
    );
};

export default SystemUsers;