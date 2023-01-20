import React from 'react';
import { showDashboard } from '../../Helpers/customFunctions';

const Dashboard = () => {

    const position = localStorage.getItem("user_position");

    return showDashboard (position);

};

export default Dashboard;