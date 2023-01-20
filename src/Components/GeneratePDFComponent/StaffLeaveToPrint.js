import React, { useState, useEffect } from 'react';
import { Card, Divider, Row, Col, Image, Button, Popconfirm, message } from 'antd';
import { getStaffLeaveById, getStaffLeaveWithProfileData, updateStaffLeaveProgress } from '../../Data/Staff';

const StaffLeaveToPrint = React.forwardRef((props, ref) => {

    const [ leave, setLeave ] = useState({});
    const [ staff, setStaff ] = useState({});
    const [ dept, setDept ] = useState({});
    const [ contacts, setContacts ] = useState({});
    const [ bank, setBank ] = useState({});
    const [ leavebalance, setLeaveBalance ] = useState({});
    const [ family, setFamily ] = useState([]);
    const [ leaveHod, setLeaveHoD ] = useState({});
    const [ principal, setPrincipal ] = useState({});
    const [ dvc, setDVC ] = useState({});

    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        const fetchLeave = () => {
            setIsLoading(true);
            getStaffLeaveWithProfileData(
                props.leaveId,
                (data) => {
                    console.log(data);
                    setStaff(data.staff);
                    setDept(data.staff.department);
                    setContacts(data.staff.contacts);
                    setFamily(data.staff.family.members);
                    setBank(data.staff.bank);
                    setLeave(data.leave);
                    setLeaveHoD(data.leave.hod);
                    setLeaveBalance(data.staff.leave_balance);
                    setPrincipal(data.leave.principal);
                    setDVC(data.leave.dvc);
                    setIsLoading(false);
                },
                (error) => {
                    setIsLoading(false);
                    console.log(error);
                }
            );
        };

        fetchLeave();

    }, []);

    return(
        <Row gutter={[8, 8]} style={{width: "100%"}}>
            <Col xs={24} sm={24} md={24} lg={24}>
                <Card ref={ref}>
                    <div>
                        <center>
                            <h1><b>UNIVERSITY OF DAR ES SALAAM</b></h1>
                            <h1><b>APPLICATION FOR LEAVE</b></h1>
                            <h4><b>(For Academic and Senior Administrative Staff)</b></h4>
                        </center>
                        {
                            !isLoading ? 
                                <div style={{paddingLeft: 95, paddingRight: 95, textAlign: "justify", textJustify: "inter-word"}}>
                                    <ol type='A'>
                                        <li>
                                            <b>PERSONAL PARTICULARS</b>
                                            <ol>
                                                <li>Name: <b>{staff.full_name}</b></li>
                                                <li>Designation: <b>{staff.cadre}</b></li>
                                                <li>Department: <b>{dept.name}</b></li>
                                                <li>Date of First Appointment: <b>{staff.dof}</b></li>
                                                <li>
                                                    The following members of my family will accompany me during my leave:
                                                    <ol>
                                                        {
                                                            family.map(member => (
                                                                <li key={family.indexOf(member)}><strong>{member.membername}</strong></li>
                                                            ))
                                                        }
                                                    </ol>
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            <b>LEAVE PARTICULARS</b>
                                            <ol start="6">
                                                <li>Proposed date of departure on leave <strong>{leave.start_date}</strong></li>
                                                <li>Gross number of leave days accumulated up to the end of last academic year <strong>{leavebalance.days_taken}</strong></li>
                                                <li>Number of leave days due for this academic year <strong>{leavebalance.days_left}</strong></li>
                                                <li>
                                                    Details of leave taken piecemeal subsequent to your last annual leave
                                                    <ul>
                                                        <li>.............................</li>
                                                        <li>.............................</li>
                                                        <li>.............................</li>
                                                    </ul>
                                                </li>
                                                <li>Net number of leave days now due (ie the total of 7 and 8 less the total under item 9) ....</li>
                                                <li>I wish to take <strong>{leave.days_requested}</strong> days out of the <strong>{leavebalance.days_left}</strong> days</li>
                                                <li>My leave will be due to expired on <strong>{leave.end_date}</strong> (date)</li>
                                            </ol>
                                        </li>
                                        <li>
                                            <b>TRAVEL FINANCIAL MATTERS</b>
                                            <ol start="13">
                                                <li>I am eligible/not eligible for leave travel assistance under section 50(f) and 60 of the
                                                    Terms of Service.
                                                </li>
                                                <li>I request that my salary at the end of the month when I am away to be paid to me at 
                                                    &nbsp; <b>{bank.name}</b> &nbsp;Bank <b>{bank.account_number}</b>
                                                </li>
                                                <li>Travel assistance is granted only when an officer takes not less than seven (7) days against
                                                    his/her leave in the annual leave cycle he/she is so eligible
                                                </li>
                                                <li>Contact address while on leave:
                                                    <p>Email: <b>{contacts.email}</b></p>
                                                    <p>Address: <b>{contacts.address}</b></p>
                                                    <p>Phone: <b>{contacts.phone}</b></p>
                                                </li>
                                            </ol>
                                            <p>Signature of Applicant ...................... Date: <b>{leave.created_at}</b></p>
                                        </li>
                                        <li>
                                            <b>DEPARTMENT USE</b>
                                            <ol start="17">
                                                <Row>
                                                    <Col xs={24} sm={24} md={18} lg={19}>
                                                        <li>
                                                            {
                                                                (leaveHod.response === "approved") ?
                                                                <span>The applicant is recommended/<strike>not recommended</strike> on the ground that*</span>
                                                                :<span>The applicant is <strike>recommended</strike>/not recommended on the ground that*</span>
                                                            }
                                                            <p><b>{leaveHod.reason}</b></p>
                                                            <p>Head of Department <b>{dept.hod}</b> Date: <b>{leaveHod.issue_date}</b></p>
                                                        </li>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={18} lg={5}>
                                                    {
                                                        (leaveHod.response === "approved") ?
                                                        <img
                                                            src="https://res.cloudinary.com/coictfms/image/upload/v1649172080/ete_stamp_rpr6lf.png"
                                                            alt="Department STAMP"
                                                            style={{width: 220, height: 140}}
                                                        />
                                                        :<span style={{color: "red"}}>Rejected</span>
                                                    }
                                                    </Col>
                                                </Row>
                                            </ol>
                                        </li>
                                        <li>
                                            <b>COLLEGE USE</b>
                                            <ol start="18">
                                                <Row>
                                                    <Col xs={24} sm={24} md={18} lg={19}>
                                                        <li>
                                                            {
                                                                (principal.response === "approved") ?
                                                                <span>The applicant is recommended/<strike>not recommended</strike> on the ground that*</span>
                                                                :<span>The applicant is <strike>recommended</strike>/not recommended on the ground that*</span>
                                                            }
                                                            <p><b>{principal.reason}</b></p>
                                                            <p>Deputy Principal, Academics ...................... Date: .......................</p>
                                                        </li>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={18} lg={5}>
                                                    {
                                                        (principal.response === "approved") ?
                                                        <img
                                                            src="https://res.cloudinary.com/coictfms/image/upload/v1654972220/coict_hgcx2s.png"
                                                            alt="College STAMP"
                                                            style={{width: 220, height: 140}}
                                                        />
                                                        :<span style={{color: "red"}}>Rejected</span>
                                                    }
                                                    </Col>
                                                </Row>
                                            </ol>
                                        </li>
                                        <li>
                                            <b>ENDORSEMENT BY:</b>
                                            <p>
                                                Deputy Vice Chancelolor Academic, Research and Consultancy/Deputy Vice Chancellor Planning,
                                                Finance and Administration
                                            </p>
                                            <hr style={{fontSize: "20px", fontWeight: "bold"}}/>
                                            <Row>
                                               <Col xs={24} sm={24} md={18} lg={19}>
                                                    <span>The application</span>
                                                    <p>* Approved</p>
                                                    <p>* Approved subject to the following comments</p>
                                               </Col>
                                               <Col xs={23} sm={24} md={18} lg={5}>
                                                {
                                                    (dvc.response === "approved") ?
                                                    <img
                                                        src="https://res.cloudinary.com/coictfms/image/upload/v1656485430/dvcStamp-removebg-preview_1_qmonge.png"
                                                        alt="dvc_academic STAMP"
                                                        style={{width: 200, height: 70}}
                                                    />
                                                    :<span style={{color: "red"}}>Rejected</span>
                                                }
                                                </Col>
                                           </Row> 
                                        </li>
                                    </ol>
                                </div>
                            :
                            <>
                                <div id="spinner"></div>
                            </>
                        }
                    </div>
                </Card>
            </Col>
        </Row>
    );
});

export default StaffLeaveToPrint;