import React, { useState, useEffect } from 'react';
import { getHoDAssignedStudentSpecialTests } from '../../../Data/Student';
import { getStudentSpecialTests } from '../../../Helpers/customFunctions';

const ReceivedSpecialTests = () => {
    return (
        getStudentSpecialTests(localStorage.getItem("user_position"))
    );
};

export default ReceivedSpecialTests;