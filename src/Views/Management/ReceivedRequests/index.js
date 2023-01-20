import React, { useState, useEffect } from 'react';
import { getHoDAssignedStaffLeaves } from '../../../Data/Staff';
import { getStaffLeaves } from '../../../Helpers/customFunctions';

const ReceivedRequests = () => {
    return (
        getStaffLeaves(localStorage.getItem("user_position"))
    );
};

export default ReceivedRequests;