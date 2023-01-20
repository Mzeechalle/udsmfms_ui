import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Statistic, Card, Button, Divider, Image, Tag, Tooltip } from 'antd';
import { getStaffProfile } from '../../../Data/Staff';
import { hideString } from '../../../Helpers/customFunctions';

const Profile = () => {

    const [ profile, setProfile ] = useState({});
    const [ staff, setStaff ] = useState({});
    const [ subVote, setSubVote ] = useState("");
    const [ position, setPosition ] = useState();
    const [ department, setDepartment ] = useState({});
    const [ family_members, setFamilyMembers ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getStaffProfile(
            localStorage.getItem("token"),
            (data) => {
                setIsLoading(false);
                console.log(data.profile[0]);
                setProfile(data.profile[0]);
                setStaff(data.profile[0].staff);
                setSubVote(data.profile[0].subVote)
                setPosition(data.profile[0].cadre);
                setDepartment(data.profile[0].department);
                setFamilyMembers(data.profile[0].family_members);
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
                    <Link to="/updatestaffprofile" style={{"float":"right"}}>
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
                                        <p><b>Fullname</b> :{`${staff.last_name}, ${staff.first_name} ${staff.middle_name}`}</p>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={12}>
                                        <p><b>Sub Vote</b> :{subVote}</p>
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
                                        <p><b>College</b> :CoICT</p>
                                    </Col>
                                    <Col xs={24} sm={8} md={12} lg={12}>
                                        <p><b>Department</b> : {department.dept_abbrv}</p>
                                    </Col>
                                </Row>
                                <Row gutter={[8, 8]}>
                                    <Col xs={24} sm={8} md={12} lg={12}>
                                        <p><b>Date of First Appointment</b> :{profile.dof}</p>
                                    </Col>
                                    <Col xs={24} sm={8} md={12} lg={12}>
                                        <p><b>Current Position</b> :{position}</p>
                                    </Col>
                                </Row>
                                <Row gutter={[8, 8]}>
                                    <Col xs={24} sm={8} md={12} lg={12}>
                                        <p><b>Marital Status</b> :{` ${profile.marital_status}`}</p>
                                    </Col>
                                    <Col xs={24} sm={8} md={12} lg={12}>
                                        <p><b>Spouse</b> :{` ${profile.spouse}`}</p>
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
                                <p><b>Phone</b> :{profile.phone}</p>
                                <p><b>Email</b> :{staff.email}</p>
                                <p><b>Address</b> :{profile.address}</p>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12}>
                            <Divider style={{color: "gray", fontSize:"14px"}}>Bank Details</Divider>
                                <p><b>Bank Name</b> :{profile.bank_name}</p>
                                <p><b>Account Number</b> :{hideString(`${profile.account_number}`)}</p>
                            </Col>
                        </Row>
                        <Row gutter={[8, 8]}>
                            <Col xs={24} sm={24} md={12} lg={12}>
                            <Divider style={{color: "gray", fontSize:"14px"}}>Family Members</Divider>
                                {
                                    family_members.length > 0 ?
                                    <ol>
                                        {
                                            family_members.map(member => (
                                                <li>
                                                    <p>
                                                        <Tooltip
                                                            title={
                                                                (new Date().getFullYear()- new Date(member.memberdob).getFullYear()) > 18 ?
                                                                "Not eligible for leave request":
                                                                "Eligible for leave request"
                                                            }
                                                        >
                                                            {member.membername}
                                                        </Tooltip>
                                                        &emsp; &emsp;
                                                        <Tag 
                                                            color="blue"
                                                        >
                                                            {
                                                                `${new Date().getFullYear()- new Date(member.memberdob).getFullYear()} years`
                                                            }
                                                        </Tag>
                                                    </p>
                                                </li>
                                            ))
                                        }
                                    </ol>
                                    :
                                    <p style={{color: "red"}}>No Family Member Registered</p>
                                }
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