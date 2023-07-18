import React, { useState, useEffect, createRef, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Card, Row, Col, Divider, Form, Input, Select, Spin, DatePicker, message } from 'antd';
import { LoadingOutlined, MinusCircleOutlined, PlusOutlined
} from '@ant-design/icons';
import { createStudentProfile } from '../../../Data/Student';
import { getAllDepartments } from '../../../Data/Department';
import { getColleges } from '../../../Data/College';
import { bankList } from '../../../Helpers/customFunctions';
import { UPLOADIMAGE } from '../../../Api';

const CreateStudentProfile = () => {

    var dataImageFile = { image: '' };

    const history = useHistory();
    const [ student, setStudentInfo ] = useState([]);
    const [ colleges, setColleges ] = useState([]);
    const [ college, setCollege ] = useState("");
    const [ departments, setDepartments ] = useState([]);
    const [ department, setDepartment ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ programme, setProgramme ] = useState("");
    const [ regno, setRegNo ] = useState("");
    const [ dob, setDob ] = useState("");
    const [ studentImage, setStudentImage ] = useState("");

    const [ form ] = Form.useForm();
    const formRef = createRef();

    const [img, setImg] = useState();
    const [preview, setPreview] = useState();

    const  hiddenFileInput = useRef(null);

    const handleImageClick = () => {
        hiddenFileInput.current.click();
    };

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

        getAllDepartments(
            data => {
                if(data.error){
                    message.error(data.message);
                }else{
                    setDepartments(data.departments);
                }
            },
            error => {
                console.log(error);
            }
        );

        if (img) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(img);
        }
        else {
            setPreview(null)
        }
    }, [img])

    const handleInputChange = (name) => async (event) => {
        //console.log(event.fileList);
        const value = name === "image" ? event.target.files[0]: event.target.files[0];
        setImg(value);
        
        dataImageFile = { [name] : value };

        try {
            let formData = new FormData();
            formData.append('image', dataImageFile.image);
            
            const response = await fetch(UPLOADIMAGE, {
                method: "POST",
                body: formData
            });

            //getting the response after sending the image to cloudinary and to the database
            const data = await response.json();
            if(data.error){
                message.error(data.message);
            }else{
                setStudentImage(data.image.image);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const onFinish = (values) => {
        try{
            createStudentProfile(
                localStorage.getItem("user_id"),
                localStorage.getItem("user_email"),
                values.college,
                values.department,
                values.regno,
                values.phone,
                values.programme,
                values.dob,
                studentImage,
                (data) => {
                    if(data.error){
                        message.error(data.message);
                    }else{
                        localStorage.setItem("hasProfile", true);
                        history.goBack();
                        message.success(data.message);
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
        }catch(error){
            console.log(error);
        }
    }

    return(
        <Card
            title="My Profile" 
            bordered={true}
        >
            <Form ref={formRef} form={form} onFinish={onFinish} layout="vertical">
                <Row gutter={[8, 8]}>
                    <Col xs={24} sm={24} md={6} lg={18}>
                        <Row gutter={[8, 8]}>
                            <Col xs={24} sm={12} md={12} lg={12}>
                                <Form.Item
                                    label="Registration Number"
                                    name="regno"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Registration Number cannot be empty!',
                                    },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter your Registration Number"
                                        value={regno}
                                        onChange={(e) => setProgramme(e.target.value)}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12}>
                                <Form.Item
                                    label="Programme"
                                    name="programme"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Programme cannot be empty!',
                                    },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter your Programme"
                                        value={programme}
                                        onChange={(e) => setProgramme(e.target.value)}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12}>
                            <Form.Item
                                        label="College/Unit/School"
                                        name="college"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'This cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Select 
                                            style={{ width: "100%" }} 
                                            placeholder="Select from Colleges"
                                            value={college}
                                            onChange={(value) => setCollege(value)}
                                        >
                                            {
                                                colleges.length > 0 ?
                                                    colleges.map(college => (
                                                        <Select.Option value={college._id} key={colleges.indexOf(college)}>{college.college_abbrv}</Select.Option>
                                                    ))
                                                : <p>Loading...</p>
                                            }
                                        </Select>
                                    </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12}>
                            <Form.Item
                                        label="Department"
                                        name="department"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'This cannot be empty!',
                                        },
                                        ]}
                                    >
                                        <Input
                                        placeholder="Enter your Department"
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                    />
                                    </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12}>
                                <Form.Item
                                    label="Mobile Phone"
                                    name="phone"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Phone cannot be empty!',
                                    },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter Mobile Phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12}>
                                <Form.Item
                                    label="Date of Birth"
                                    name="dob"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Date of Birth cannot be empty!',
                                        },
                                        ]}
                                >
                                    <DatePicker
                                                    placeholder='Date of birth'
                                                    value={dob}
                                                    style={{"width": "100%"}}
                                                />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Divider style={{color: "gray", fontSize:"14px"}}>Profile Photo</Divider>
                        <Form.Item
                            name="image"
                            rules={[
                            {
                                required: true,
                                message: 'Image can not be empty!',
                            },
                            ]}
                        >
                            <center>
                                <img
                                    src={img ? preview : 'https://res.cloudinary.com/kelvkedyson/image/upload/v1620844399/defaultPic_xef3zi.png'}
                                    alt="Click here to upload"
                                    className="upload_an_image"
                                    id="upload_image"
                                    onClick={handleImageClick}
                                    style={{ width: "80%", height: "200px", marginTop: "-16px", cursor: "pointer", objectFit: "cover", backgroundSize: "cover", borderRadius: "10%" }}

                                />
                                <input
                                    type="file"
                                    name="image"
                                    ref={hiddenFileInput}
                                    onChange={handleInputChange('image')}
                                    style={{display: "none"}}
                                />
                            </center>
                        </Form.Item>
                    </Col>
                </Row>
                <>
                    <Form.Item shouldUpdate>
                        {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{backgroundColor: "#48A64C", color: "white"}}
                        >
                            SAVE
                        </Button>
                        )}
                    </Form.Item>
                    <Form.Item shouldUpdate>
                        {() => (
                        <Button 
                            type="danger"
                            onClick={() => history.goBack()}
                            
                        >
                            CANCEL
                        </Button>
                        )}
                    </Form.Item>
                </>
            </Form>
        </Card>
    );
};

export default CreateStudentProfile;


/**
<Form.Item
    label="Bank Name"
    name="bank_name"
    rules={[
    {
        required: true,
        message: 'Bank Name cannot be empty!',
    },
    ]}
>
    <Select 
        style={{ width: "100%" }} 
        placeholder="Select from Banks"
        value=""
    >
        {
            banks.length > 0 ?
            banks.map(bank => (
                <Select.Option value={bank}>{`${bank}`}</Select.Option>
            ))
            :
            <center>
                <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }}/>}/>
            </center>
        }
    </Select>
</Form.Item>

<center>
    <img
        src={props.image}
        alt="Click here to upload"
        className="upload_an_image"
        id="upload_image"
        onClick={handleImageClick}
        style={props.style}

    />
    <input
        type="file"
        onChange={props.handler}
        ref={hiddenFileInput}
        accept="image/*"
        style={{ display: "none" }}
    />
</center>
 */