import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const ModalComponent = (props) => {
    return(
        <>
            <Modal
                title={props.title}
                visible={props.visible}
                onOk={props.handleOk}
                confirmLoading={props.confirmLoading}
                onCancel={props.handleCancel}
                style={props.style}
            >
                {props.modalText}
            </Modal>
        </>
    );
}

export default ModalComponent;