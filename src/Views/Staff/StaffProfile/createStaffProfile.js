import React, { useState, useEffect, createRef, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Card, Row, Col, Divider, Form, Input, Select, Spin, DatePicker, message } from 'antd';
import { LoadingOutlined, MinusCircleOutlined, PlusOutlined
} from '@ant-design/icons';
import { createStaffProfile } from '../../../Data/Staff';
import { getAllDepartments } from '../../../Data/Department';
import { getColleges } from '../../../Data/College';
import { bankList } from '../../../Helpers/customFunctions';
import { UPLOADIMAGE } from '../../../Api';

const CreateStaffProfile = () => {

    var dataImageFile = { image: '' };

    const history = useHistory();
    const banks = bankList();
    const [ staff, setStaffInfo ] = useState([]);
    const [ colleges, setColleges ] = useState([]);
    const [ college, setCollege ] = useState("");
    const [ departments, setDepartments ] = useState([]);
    const [ department, setDepartment ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ marital_status, setMaritalStatus ] = useState("");
    const [ spouse, setSpouse ] = useState("");
    const [ dob, setDob ] = useState("");
    const [ dof, setDof ] = useState("");
    const [ bank_name, setBankName ] = useState("");
    const [ account_number, setAccountNumber ] = useState("");
    const [ staffImage, setStaffImage ] = useState("");

    const [ form ] = Form.useForm();
    const formRef = createRef();

    const [img, setImg] = useState();
    const [preview, setPreview] = useState();

    const  hiddenFileInput = useRef(null);

    const handleImageClick = () => {
        hiddenFileInput.current.click();
    };

    useEffect(() => {
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
                setStaffImage(data.image.image);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const onFinish = (values) => {
        try{
            createStaffProfile(
                localStorage.getItem("user_id"),
                localStorage.getItem("user_email"),
                marital_status,
                phone,
                address,
                bank_name,
                account_number,
                account_number,
                spouse,
                values.family_members,
                staffImage,
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
            title="My Leaves" 
            bordered={true}
        >
            <Form ref={formRef} form={form} onFinish={onFinish} layout="vertical">
                <Row gutter={[8, 8]}>
                    <Col xs={24} sm={24} md={6} lg={18}>
                        <Row gutter={[8, 8]}>
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
                                    label="Address"
                                    name="address"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Address cannot be empty!',
                                    },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter your Address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12}>
                                <Form.Item
                                    label="Marital Status"
                                    name="marital_status"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Marital Status cannot be empty!',
                                    },
                                    ]}
                                >
                                    <Select 
                                        style={{ width: "100%" }} 
                                        placeholder="Please Select"
                                        value={marital_status}
                                        onChange={(value) => setMaritalStatus(value)}
                                    >
                                        <Select.Option value="Single" key={1}>Single</Select.Option>
                                        <Select.Option value="Married" key={2}>Married</Select.Option>
                                        <Select.Option value="Divorced" key={3}>Divorced</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12}>
                                <Form.Item
                                    label="Spouse"
                                    name="spouse"
                                >
                                    <Input
                                        placeholder="Your Spouse fullname"
                                        value={spouse}
                                        onChange={(e) => setSpouse(e.target.value)}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[8, 8]}>
                            <Col xs={24} sm={12} md={12} lg={12}>
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
                                        value={bank_name}
                                        onChange={(value) => setBankName(value)}
                                    >
                                        {
                                            banks.length > 0 ?
                                            banks.map(bank => (
                                                <Select.Option value={bank} key={banks.indexOf(`${bank}`)}>{`${bank}`}</Select.Option>
                                            ))
                                            :
                                            <center>
                                                <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }}/>}/>
                                            </center>
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12}>
                                <Form.Item
                                    label="Account Number"
                                    name="account_number"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'A/C number cannot be empty!',
                                    },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter Account number"
                                        value={account_number}
                                        onChange={(e) => setAccountNumber(e.target.value)}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.List name="family_members">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                                    <Row gutter={[8, 8]}>
                                        <Col xs={24} sm={24} md={24} lg={12}>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'membername']}
                                                fieldKey={[fieldKey, 'membername']}
                                                
                                            >
                                                <Input
                                                    placeholder="Full name"
                                                    style={{width:"100%"}}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12} md={12} lg={5}>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'memberdob']}
                                                fieldKey={[fieldKey, 'memberdob']}
                                                
                                            >
                                                <DatePicker
                                                    placeholder='Date of birth'
                                                    style={{"width": "100%"}}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={12} md={12} lg={7}>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'membertitle']}
                                                fieldKey={[fieldKey, 'membertitle']}
                                                
                                            >
                                                <Input
                                                    addonAfter={<MinusCircleOutlined onClick={() => remove(name)} style={{color:"red", width:"50px"}} />}
                                                    placeholder="Title"
                                                    style={{width:"100%"}}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    ))}
                                    <Form.Item
                                        name="family_member_add"
                                    >
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Add Family Member
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
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

export default CreateStaffProfile;


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