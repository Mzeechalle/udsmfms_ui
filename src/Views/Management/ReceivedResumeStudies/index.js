import React, { useState, useEffect } from 'react';
import { getHoDAssignedStudentResumeStudies } from '../../../Data/Student';
import { getStudentResumeStudies } from '../../../Helpers/customFunctions';

const ReceivedResumeStudies = () => {
    return (
        getStudentResumeStudies(localStorage.getItem("user_position"))
    );
};

export default ReceivedResumeStudies;