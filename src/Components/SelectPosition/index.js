import React, { useState, useEffect } from 'react';
import { Select, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import SelectComponent from '../SelectComponent';
import { getAllPositions } from '../../Data/Position';

const SelectPosition = (props) => {

    useEffect(() => {
        getAllPositions(
            (data) => {
                setPositions(data.positions);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    const [ positions, setPositions ] = useState([]);

    return(
        <>
            <SelectComponent
                style={{ width: "100%" }}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onSelectItemChange}
            >
                {
                    positions.length > 0 ?
                        positions.map(position => (
                            <Select.Option value={position._id}>{`${position.pos_name} Account`}</Select.Option>
                        ))
                    :
                    <center>
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }}/>}/>
                    </center>
                }
            </SelectComponent>
        </>
    );
};

export default SelectPosition;


//todo
/**
 * to add more position (secretary and accountant)
 */