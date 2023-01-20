import React, { useState } from 'react';
import { Select } from 'antd';

const SelectComponent = (props) => {

    return(
        <Select
            style={props.style}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        >
            {props.children}
        </Select>
    );
};

export default SelectComponent;