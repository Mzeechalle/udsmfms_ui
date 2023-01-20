import React, { useState, useEffect } from 'react';
import { Card, Divider } from 'antd';
import { getStaffLeaveById, getStaffLeaveWithProfileData } from '../../../../Data/Staff';

const ViewLeave = () => {

    const [ leave, setLeave ] = useState({});
    const [ profile, setProfile ] = useState({});

    useEffect(() => {
        getStaffLeaveWithProfileData(
            localStorage.getItem("leave_id"),
            (data) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        )
    }, []);
    return(
        <Card>
            <div>
                <center>
                    <h1><b>UNIVERSITY OF DAR ES SALAAM</b></h1>
                    <h1><b>APPLICATION FOR LEAVE</b></h1>
                    <h4><b>(For Academic and Senior Administrative Staff)</b></h4>
                </center>
                <div style={{paddingLeft: 95, paddingRight: 95, textAlign: "justify", textJustify: "inter-word"}}>
                    <ol type='A'>
                        <li>
                            <b>PERSONAL PARTICULARS</b>
                            <ol>
                                <li>Name: .................................</li>
                                <li>Designation: .................................</li>
                                <li>Department: .................................</li>
                                <li>Date of First Appointment: ..........................</li>
                                <li>
                                    The following members of my family will accompany me during my leave:
                                    <ol>
                                        <li>.................</li>
                                        <li>.................</li>
                                        <li>.................</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <b>LEAVE PARTICULARS</b>
                            <ol start="6">
                                <li>Proposed date of departure on leave .......................</li>
                                <li>Gross number of leave days accumulated up to the end of last academic year (i.e .....)</li>
                                <li>Number of leave days due for this academic year .......................</li>
                                <li>
                                    Details of leave taken piecemeal subsequent to your last annual leave
                                    <ul>
                                        <li>.............................</li>
                                        <li>.............................</li>
                                        <li>.............................</li>
                                    </ul>
                                </li>
                                <li>Net number of leave days now due (ie the total of 7 and 8 less the total under item 9) ....</li>
                                <li>I wish to take ............... days out of the .......... days</li>
                                <li>My leave will be due to expired on ................ (date)</li>
                            </ol>
                        </li>
                        <li>
                            <b>TRAVEL FINANCIAL MATTERS</b>
                            <ol start="13">
                                <li>I am eligible/not eligible for leave travel assistance under section 50(f) and 60 of the
                                    Terms of Service.
                                </li>
                                <li>I request that my salary at the end of the month when I am away to be paid to me at 
                                    ............................ Bank ..........................................
                                </li>
                                <li>Travel assistance is granted only when an officer takes not less than seven (7) days against
                                    his/her leave in the annual leave cycle he/she is so eligible
                                </li>
                                <li>Contact address while on leave:
                                    <p>.......................................</p>
                                    <p>.......................................</p>
                                    <p>.......................................</p>
                                </li>
                            </ol>
                            <p>Signature of Applicant ...................... Date: .......................</p>
                        </li>
                        <li>
                            <b>DEPARTMENT USE</b>
                            <ol start="17">
                                <li>
                                    The applicant is recommended/not recommended on the ground that*
                                    <p>......................................................</p>
                                    <p>......................................................</p>
                                    <p>Head of Department ...................... Date: .......................</p>
                                    <img
                                        src="https://res.cloudinary.com/coictfms/image/upload/v1649172080/ete_stamp_rpr6lf.png"
                                        alt="Department STAMP"
                                        style={{width: 290, height: 150}}
                                    />
                                </li>
                            </ol>
                        </li>
                        <li>
                            <b>COLLEGE USE</b>
                            <ol start="18">
                                <li>
                                    The applicant is recommended/not recommended on the ground that*
                                    <p>......................................................</p>
                                    <p>......................................................</p>
                                    <p>Deputy Principal, Academics ...................... Date: .......................</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <b>ENDORSEMENT BY:</b>
                            <p>
                                Deputy Vice Chancelolor Academic, Research and Consultancy/Deputy Vice Chancellor Planning,
                                Finance and Administration
                            </p>
                            <hr style={{fontSize: "20px", fontWeight: "bold"}}/>
                            <span>The application</span>
                            <p>* Approved</p>
                            <p>* Approved subject to the following comments</p>
                        </li>
                    </ol>
                </div>
            </div>
        </Card>
    );
};

export default ViewLeave;