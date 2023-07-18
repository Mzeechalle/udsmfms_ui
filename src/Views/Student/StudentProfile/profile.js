import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Statistic, Card, Button, Divider, Image, Tag, Tooltip } from 'antd';
import { getStudentProfile } from '../../../Data/Student';
import { hideString } from '../../../Helpers/customFunctions';
import Colleges from '../../Colleges';

const Profile = () => {

    const [ profile, setProfile ] = useState({});
    const [ student, setStudent ] = useState({});
    const [ department, setDepartment ] = useState({});
    const [ college, setCollege] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getStudentProfile(
            localStorage.getItem("token"),
            (data) => {
                setIsLoading(false);
                console.log(data.profile[0]);
                setProfile(data.profile[0]);
                setStudent(data.profile[0].student);
                setDepartment(data.profile[0].department);
                setCollege(data.profile[0].college);
            },
            (error) => {
                setIsLoading(false);
                console.log(error);
            }
        );
    }, []);

    return(
        <>
            <Card
                title="My Profile" 
                bordered={true} 
                extra={
                    <Link to="/updatestudentprofile" style={{"float":"right"}}>
                        <Button type="primary">Update Profile</Button>
                    </Link>
                }
            >
                {
                    !isLoading ?
                        profile ?
                        <>
                        <Row gutter={[8, 8]}>
                            <Col xs={24} sm={24} md={6} lg={18}>
                            <Divider style={{color: "gray", fontSize:"14px"}}>Basic Details</Divider>
                                <Row gutter={[8, 8]}>
                                    <Col xs={24} sm={24} md={24} lg={12}>
                                        <p><b>Fullname</b> : {`${student.last_name}, ${student.first_name} ${student.middle_name}`}</p>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={12}>
                                        <p><b>Position</b> : Student</p>
                                    </Col>
                                </Row>
                                <Row gutter={[8, 8]}>
                                    <Col xs={24} sm={8} md={12} lg={12}>
                                        <p><b>Registration number:</b> : {profile.regno}</p>
                                    </Col>
                                    <Col xs={24} sm={8} md={12} lg={12}>
                                        <p><b>Year of Study</b> : <Tag color="blue">{profile.dof} </Tag></p>
                                    </Col>
                                </Row>
                                <Row gutter={[8, 8]}>
                                    <Col xs={24} sm={8} md={12} lg={12}>
                                        <p><b>College</b> : {college.college_abbrv}</p>
                                    </Col>
                                    <Col xs={24} sm={8} md={12} lg={12}>
                                        <p><b>Department</b> : {department.dept_abbrv}</p>
                                    </Col>
                                </Row>
                                <Row gutter={[8, 8]}>
                                    <Col xs={24} sm={8} md={12} lg={12}>
                                        <p><b>Date of Birth</b> : {profile.dob}</p>
                                    </Col>
                                    <Col xs={24} sm={8} md={12} lg={12}>
                                        <p><b>Age</b> : <Tag color="blue">{`${profile.age} years`}</Tag></p>
                                    </Col>
                                </Row>
                                <Row gutter={[8, 8]}>
                                    <Col xs={24} sm={8} md={12} lg={12}>
                                        <p><b>Programme</b> : {profile.programme}</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Divider style={{color: "gray", fontSize:"14px"}}>Profile Photo</Divider>
                                <center>
                                    <Image
                                        width={200}
                                        src={profile.photo}
                                    />
                                </center>
                            </Col>
                        </Row>
                        <Row gutter={[8, 8]}>
                            <Col xs={24} sm={24} md={12} lg={12}>
                            <Divider style={{color: "gray", fontSize:"14px"}}>Contact Details</Divider>
                                <p><b>Phone</b> : {profile.phone}</p>
                                <p><b>Email</b> : {student.email}</p>
                            </Col>
                        </Row>
                        </>
                        :<p>No Profile</p>
                    :
                    <>
                        <div id="spinner"></div>
                    </>
                }
            </Card>
        </>
    );
};

export default Profile;