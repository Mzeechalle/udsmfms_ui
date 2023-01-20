import React from 'react';
import { Descriptions } from 'antd';

const StaffInfo = (props) => {
    //console.log(props);
    return(
        <>
            {
                props.staff.length > 0 ?
                props.staff.map(staff => (
                    <Descriptions title="Basic Information">
                        <Descriptions.Item label={<b>Fullname</b>}>{staff.fullName}</Descriptions.Item>
                        <Descriptions.Item label={<b>Date of Birth</b>}>{staff.dateOfBirth}</Descriptions.Item>
                        <Descriptions.Item label={<b>Gender</b>}>{staff.gender}</Descriptions.Item>
                        <Descriptions.Item label={<b>Email</b>}>{staff.email}</Descriptions.Item>
                        <Descriptions.Item label={<b>College</b>}>{staff.college}</Descriptions.Item>
                        <Descriptions.Item label={<b>Department</b>}>{staff.department}</Descriptions.Item>
                        <Descriptions.Item label={<b>Cadre</b>}>{staff.cadre}</Descriptions.Item>
                        <Descriptions.Item label={<b>Date of First Appointment</b>}>{staff.dateOfFA}</Descriptions.Item>
                    </Descriptions>
                ))
                :<h2>Fetching details..</h2>
            }
        </>
    );
};

export default StaffInfo