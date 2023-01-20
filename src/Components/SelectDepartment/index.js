import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { getAllDepartments } from "../../Data/Department";
import SelectComponent from "../SelectComponent";

const SelectDepartment = (props) => {

    const [ departments, setDepartments ] = useState([]);

    //fetching the departments using useEffect
    useEffect(() => {
        getAllDepartments(
            (data) => {
                setDepartments(data["departments"]);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    return(
        <>
            <SelectComponent
                style={{ width: "100%" }}
                placeholder="Select Department"
                value={props.departmentSelected}
                onChange={props.onSelectDepartmentChange}
            >
                {
                    departments.length > 0 ?
                        departments.map(department => (
                            <Select.Option value={department._id}>{department.dept_name}</Select.Option>
                        ))
                    : <p>Loading...</p>
                }

            </SelectComponent>
        </>
    );
};

export default SelectDepartment;