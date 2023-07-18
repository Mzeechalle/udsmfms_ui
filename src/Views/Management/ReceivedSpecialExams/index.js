import React, { useState, useEffect } from 'react';
import { getHoDAssignedStudentSpecialExams } from '../../../Data/Student';
import { getStudentSpecialExams } from '../../../Helpers/customFunctions';

const ReceivedSpecialExams = () => {
    return (
        getStudentSpecialExams(localStorage.getItem("user_position"))
    );
};

export default ReceivedSpecialExams;