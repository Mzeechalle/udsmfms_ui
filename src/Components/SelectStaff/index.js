import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import SelectComponent from '../SelectComponent';

const SelectStaff = (props) => {
    return(
        <>
            <SelectComponent
                style={{ width: "100%" }}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onSelectItemChange}
            >
                <Select.Option value="Julius">Julius Mallya</Select.Option>
                <Select.Option value="Kedyson">Kelvin Kedyson</Select.Option>
            </SelectComponent>
        </>
    );
};

export default SelectStaff;