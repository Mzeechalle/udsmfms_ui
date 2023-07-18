import React, { useState, useEffect } from 'react';
import { Card, Divider, Row, Col, Image, Button, Popconfirm, message } from 'antd';
import { getStudentPostponementById, getStudentPostponementWithProfileData, updateStudentPostponementProgress } from '../../../../Data/Student';
import PostponementReasonComponent from '../../../../Components/PostponementReasonComponent';
import ModalComponent from '../../../../Components/ModalComponent';
import { showPosition } from '../../../../Helpers/customFunctions';
import GeneratePostponementPDF from '../../../../Components/GeneratePostponementPDFComponent';

const ViewPostponement = () => {

    const [ postponement, setPostponement ] = useState({});
    const [ profile, setProfile ] = useState({});
    const [ student, setStudent ] = useState({});
    const [ dept, setDept ] = useState({});
    const [ college, setCollege ] = useState({});
    const [ contacts, setContacts ] = useState({});
    const [ postponementHod, setPostponementHoD ] = useState({});
    const [ principal, setPrincipal ] = useState({});
    const [ dvc, setDVC ] = useState({});

    //setting the visibility of the reason modal
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isBtnLoading, setIsBtnLoading ] = useState(false);

    useEffect(() => {
        const fetchPostponement = () => {
            setIsLoading(true);
            getStudentPostponementWithProfileData(
                localStorage.getItem("postponement_id"),
                (data) => {
                    console.log(data.postponement);
                    setStudent(data.student);
                    setDept(data.student.department);
                    setCollege(data.student.college);
                    setContacts(data.student.contacts);
                    setPostponement(data.postponement);
                    setPostponementHoD(data.postponement.hod);
                    setPrincipal(data.postponement.principal);
                    setDVC(data.postponement.dvc);
                    setIsLoading(false);
                },
                (error) => {
                    setIsLoading(false);
                    console.log(error);
                }
            );
        };

        fetchPostponement();

    }, []);

    //opening a modal
    const showModal = () => {
        setVisible(true);
    };

    //closing a modal
    const handleCancel = () => {
        setVisible(false);
    };

    const handleOk = () => {
        // setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };
    return(
        <Row gutter={[8, 8]} style={{width: "100%"}}>
            <Col xs={24} sm={24} md={18} lg={18}>
                <Card>
                    <div>
                        <center>
                            <h1><b>UNIVERSITY OF DAR ES SALAAM</b></h1>
                            <h1><b>APPLICATION FOR POSTPONEMENT OF STUDIES</b></h1>
                        </center>
                        {
                            !isLoading ? 
                                <div style={{paddingLeft: 95, paddingRight: 95, textAlign: "justify", textJustify: "inter-word"}}>  
                                        <div style={{float:"right"}}>
                                            <p>{student.full_name}</p>
                                            <p>{student.regno}</p>
                                            <p>{postponement.created_at}</p>
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
                                        <p style={{textTransform:"uppercase"}}>{college.name}</p>
                                        <p>UNIVERSITY OF DAR-ES-SALAAM,</p>
                                        <p>P.O.BOX 35091,</p>
                                        <p>DAR-ES-SALAAM.</p>
                                        <p>U.F.S</p>
                                        <p>HOD,</p>
                                        <p style={{textTransform:"uppercase"}}>{dept.name},</p>
                                        <p>UNIVERSITY OF DAR-ES-SALAAM,</p>
                                        <p>P.O.BOX 35091,</p>
                                        <p>DAR-ES-SALAAM.</p>
                                        <p>Dear Sir/Madam,</p>
                                        <center><h4><u>RE: REQUEST FOR POSTPONEMENT OF STUDIES</u></h4></center>
                                        <p>Kindly refer to the above heading. I, {student.full_name} with the registration number {student.regno} taking {student.programme} of year of study {student.dof}.  I am requesting for resume of my studies due to {postponement.reason}</p>
                                        <p>I hope that my request will be humbly and positively considered. Thanks, in anticipation.</p>
                                        <p>Yours faithfully,</p>
                                        <img
                                            src="https://res.cloudinary.com/dokdxkfp6/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1688302112/signature_aya3tm.png"
                                            alt="Student Signature"
                                            style={{width: 100, height: 80}}
                                        />
                                        <p>{student.full_name}</p>
                                        <p>{contacts.phone}</p>
                                        <li>
                                            <b>DEPARTMENT USE</b>
                                                <Row>
                                                    <Col xs={24} sm={24} md={18} lg={19}>
                                                        <li>
                                                            {
                                                                (postponementHod.response === "approved") ?
                                                                <span>The applicant is recommended/<strike>not recommended</strike> on the ground that*</span>
                                                                :<span>The applicant is <strike>recommended</strike>/not recommended on the ground that*</span>
                                                            }
                                                            <p><b>{postponementHod.reason}</b></p>
                                                            <p>Head of Department <b>{dept.hod}</b> Date: <b>{postponementHod.issue_date}</b></p>
                                                        </li>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={18} lg={5}>
                                                    {
                                                        (postponementHod.response === "approved") ?
                                                        <img
                                                            src="https://res.cloudinary.com/coictfms/image/upload/v1649172080/ete_stamp_rpr6lf.png"
                                                            alt="Department STAMP"
                                                            style={{width: 220, height: 140}}
                                                        />
                                                        :<span style={{color: "red"}}>Rejected</span>
                                                    }
                                                    </Col>
                                                </Row>
                                        </li>
                                        <li>
                                            <b>COLLEGE USE</b>
                                                <Row>
                                                    <Col xs={24} sm={24} md={18} lg={19}>
                                                        <li>
                                                            {
                                                                (principal.response === "approved") ?
                                                                <span>The applicant is recommended/<strike>not recommended</strike> on the ground that*</span>
                                                                :<span>The applicant is <strike>recommended</strike>/not recommended on the ground that*</span>
                                                            }
                                                            <p><b>{principal.reason}</b></p>
                                                            <p>Principal <b>Mtebe, Joel S</b> Date: <b>{principal.issue_date}</b></p>
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
                                        </li>
                                        <li>
                                            <b>ENDORSEMENT BY:</b>
                                            <p>
                                                Deputy Vice Chancelolor Academic, Research and Consultancy
                                            </p>
                                            <hr style={{fontSize: "20px", fontWeight: "bold"}}/>
                                           <Row>
                                               <Col xs={24} sm={24} md={18} lg={19}>
                                                    <span>The application</span>
                                                    <p>* Approved</p>
                                                    <p>* Approved subject to the following comments</p>
                                               </Col>
                                               <Col xs={24} sm={24} md={18} lg={5}>
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
                                </div>
                            :
                            <>
                                <div id="spinner"></div>
                            </>
                        }
                    </div>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6}>
                <Card 
                    title="Basic Details" 
                    bordered={true}
                    // style={{position: "fixed",width: "100%"}}
                >
                    <center>
                        <Image
                            width={200}
                            src={student.photo}
                        />
                    </center>
                    <Divider style={{color: "gray", fontSize:"14px"}}>Postponement Details</Divider>
                    <p><strong>Reason : </strong> &nbsp; {postponement.reason}</p>
                    {
                        (localStorage.getItem("user_position") === "HoD") || (localStorage.getItem("user_position") === "Principal") || showPosition((localStorage.getItem("user_position")) === "DVC Academic") ?
                        <Row gutter={[8, 8]}>
                            <Button
                                type="primary"
                                disabled={!isBtnLoading ? false: true}
                                style={{marginRight: 10, backgroundColor: "#48A64C", color: "white"}}
                                onClick={() => {
                                    setIsBtnLoading(true);
                                    updateStudentPostponementProgress(
                                        localStorage.getItem("postponement_id"),
                                        contacts.email,
                                        showPosition(localStorage.getItem("user_position")),
                                        "approved",
                                        (data) => {
                                            if(data.error){
                                                setIsBtnLoading(false);
                                                message.error(data.message);
                                            }else{
                                                setIsBtnLoading(false);
                                                message.success("Approved");
                                            }
                                        },
                                        (error) => {
                                            setIsBtnLoading(false);
                                            console.error(error);
                                        }
                                    );
                                }}
                            >
                                {
                                    !isBtnLoading ? "Approve":"Loading.."
                                }
                            </Button>
                            <Button
                                    type="primary"
                                    onClick={showModal}
                                    danger
                                >
                                    Reject
                                </Button>
                            <ModalComponent
                                modalText={
                                    <PostponementReasonComponent
                                        postponementId={localStorage.getItem("postponement_id")}
                                        student_email={contacts.email}
                                        person={showPosition(localStorage.getItem("user_position"))}
                                        status="rejected"
                                    />
                                }
                                handleCancel={handleCancel}
                                handleOk={handleOk}
                                confirmLoading={confirmLoading}
                                visible={visible}
                                style={{height: "40%"}}
                            />
                        </Row>
                        :
                        <>
                            <GeneratePostponementPDF postponementId={localStorage.getItem("postponement_id")}/>
                        </>
                    }
                </Card>
            </Col>
        </Row>
    );
};

export default ViewPostponement;