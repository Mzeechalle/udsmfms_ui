import React, { useState, useEffect } from 'react';
import { Card, Divider } from 'antd';
import { getStudentPostponementById, getStudentPostponementWithProfileData } from '../../../../Data/Student';

const ViewPostponement = () => {

    const [ postponement, setPostponement ] = useState({});
    const [ profile, setProfile ] = useState({});

    useEffect(() => {
        getStudentPostponementWithProfileData(
            localStorage.getItem("postponement_id"),
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
                            <h1><b>APPLICATION FOR SPECIAL TEST</b></h1>
                        </center>
                        {
                            !isLoading ? 
                                <div style={{paddingLeft: 95, paddingRight: 95, textAlign: "justify", textJustify: "inter-word"}}>
                                        <div style={{float:"right"}}>
                                        <p>......................................................</p>
                                        <p>......................................................</p>
                                        <p>......................................................</p>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <p>DVC-ACADEMIC,</p>
                                        <p>UNIVERSITY OF DAR-ES-SALAAM,</p>
                                        <p>P.O.BOX 35091,</p>
                                        <p>DAR-ES-SALAAM.</p>
                                        <p>U.F.S</p>
                                        <p>PRINCIPAL,</p>
                                        <p>......................................................</p>
                                        <p>UNIVERSITY OF DAR-ES-SALAAM,</p>
                                        <p>P.O.BOX 35091,</p>
                                        <p>DAR-ES-SALAAM.</p>
                                        <p>U.F.S</p>
                                        <p>HOD,</p>
                                        <p>......................................................</p>
                                        <p>UNIVERSITY OF DAR-ES-SALAAM,</p>
                                        <p>P.O.BOX 35091,</p>
                                        <p>DAR-ES-SALAAM.</p>
                                        <p>Dear Sir/Madam,</p>
                                        <center><h4><u>RE: REQUEST FOR SPECIAL Test</u></h4></center>
                                        <p>Kindly refer to the above heading. I, ...................................................... with the registration number ...................................................... taking ...................................................... year ...................................................... of study. I  Am kindly apologising for 
                                            unintentionally not being able to complete the last examination of ...................................................... due to ...................................................... . I 
                                            hereby attach documents for my reference</p>
                                        <p>Therefore, I kindly request for a special Test to be set for me to sit for the examination of ...................................................... .</p>
                                        <p>I hope that my request will be humbly and positively considered. Thanks, in anticipation.</p>
                                        <p>Yours faithfully,</p>
                                        <p>......................................................</p>
                                        <p>......................................................</p>
                                        <p>......................................................</p>
                                        <li>
                                            <b>MEDICAL OFFICER INCHARGE USE</b>
                                                <Row>
                                                    <Col xs={24} sm={24} md={18} lg={19}>
                                                        <li>
                                                            {
                                                                (specialTestMo.response === "approved") ?
                                                                <span>The applicant is recommended/<strike>not recommended</strike> on the ground that*</span>
                                                                :<span>The applicant is <strike>recommended</strike>/not recommended on the ground that*</span>
                                                            }
                                                            <p><b>{specialTestMo.reason}</b></p>
                                                            <p>Mdeical Officer Incharge <b>Msasu, Alfred John Msasu</b> Date: <b>{specialTestMo.issue_date}</b></p>
                                                        </li>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={18} lg={5}>
                                                    {
                                                        (specialTestMo.response === "approved") ?
                                                        <img
                                                            src="https://res.cloudinary.com/coictfms/image/upload/v1649172080/ete_stamp_rpr6lf.png"
                                                            alt="Hospital STAMP"
                                                            style={{width: 220, height: 140}}
                                                        />
                                                        :<span style={{color: "red"}}>Rejected</span>
                                                    }
                                                    </Col>
                                                </Row>
                                        </li>
                                        <li>
                                        <b>HOSPITAL USE</b>
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
                                </div>
                            :
                            <>
                                <div id="spinner"></div>
                            </>
                        }
                    </div>
        </Card>
    );
};

export default ViewPostponement;