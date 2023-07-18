import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Profile from "./profile";
import { Row, Col, Statistic, Card, Button, Divider, Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { getStudentProfile } from '../../../Data/Student';

const StudentProfile = () => {

    return(
        <>
            {
                
                localStorage.getItem("hasProfile") === 'true' ?
                <Profile/>
                :
                <Card
                    title="My Profile" 
                    bordered={true} 
                    extra={
                        <Link to="/createstudentprofile" style={{"float":"right"}}>
                            <Button type="primary">Create Profile</Button>
                        </Link>
                    }
                >
                    <center>
                        <Result
                            icon={<SmileOutlined style={{color: "red"}}/>}
                            title="You do not have a profile!"
                            extra={
                                <Link to="/createstudentprofile">
                                    <Button type="primary">Create Now</Button>
                                </Link>
                            }
                        />
                    </center>
                </Card>
            }
        </>
    );
};

export default StudentProfile;