import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import SelectComponent from '../SelectComponent';
import { getAllRoles } from '../../Data/Role';

const SelectRole = (props) => {

    useEffect(() => {
        getAllRoles(
            (data) => {
                setRoles(data.roles);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    const [ roles, setRoles ] = useState([]);

    return(
        <>
            <SelectComponent
                style={{ width: "100%" }}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onSelectItemChange}
            >
                {
                    roles.length > 0 ?
                        roles.map(role => (
                            <Select.Option value={role._id}>{role.role_name.toUpperCase()}</Select.Option>
                        ))
                    : <p>Loading...</p>
                }
            </SelectComponent>
        </>
    );
};

export default SelectRole;