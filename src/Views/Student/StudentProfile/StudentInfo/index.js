import React from 'react';
import { Descriptions } from 'antd';

const StudentInfo = (props) => {
    //console.log(props);
    return(
        <>
            {
                props.student.length > 0 ?
                props.student.map(student => (
                    <Descriptions title="Basic Information">
                        <Descriptions.Item label={<b>Fullname</b>}>{student.fullName}</Descriptions.Item>
                        <Descriptions.Item label={<b>Date of Birth</b>}>{student.dateOfBirth}</Descriptions.Item>
                        <Descriptions.Item label={<b>Gender</b>}>{student.gender}</Descriptions.Item>
                        <Descriptions.Item label={<b>Email</b>}>{student.email}</Descriptions.Item>
                        <Descriptions.Item label={<b>College</b>}>{student.college}</Descriptions.Item>
                        <Descriptions.Item label={<b>Department</b>}>{student.department}</Descriptions.Item>
                        <Descriptions.Item label={<b>Phone</b>}>{student.phone}</Descriptions.Item>
                    </Descriptions>
                ))
                :<h2>Fetching details..</h2>
            }
        </>
    );
};

export default StudentInfo