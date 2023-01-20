import React from 'react';
import { Progress } from 'antd';

const ProgressBarComponent = (props) => {
    return (
        <>
            <span>{props.name}</span>
            <Progress 
                percent={props.percent} 
                strokeColor={props.strokeColor} 
                status={props.status} 
                style={props.style} 
                showInfo={props.showInfo}
            />
        </>
    );
}

export default ProgressBarComponent;