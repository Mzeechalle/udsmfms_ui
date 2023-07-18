import React, { useState, useEffect } from 'react';
import { getHoDAssignedStudentPostponements } from '../../../Data/Student';
import { getStudentPostponements } from '../../../Helpers/customFunctions';

const ReceivedPostponements = () => {
    return (
        getStudentPostponements(localStorage.getItem("user_position"))
    );
};

export default ReceivedPostponements;