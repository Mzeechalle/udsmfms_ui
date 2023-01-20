import { ADMINITEMS, STAFFITEMS, STUDENTITEMS, MANAGEMENTITEMS, UNKNOWNITEMS } from "../Components/SideNav/menuItems";
import AdminDashboard from "../Components/Dashboard/admin";
import StaffDashboard from "../Components/Dashboard/staff";
import StudentDashboard from "../Components/Dashboard/student";
import UnknownDashboard from "../Components/Dashboard/unknown";

import HODReceivedStaffLeaves from "../Views/Management/ReceivedRequests/HoD";
import PrincipalReceivedStaffLeaves from "../Views/Management/ReceivedRequests/Principal";
import DVCReceivedStaffLeaves from "../Views/Management/ReceivedRequests/DVC";
import { countUsersByPosition } from "../Data/Users";

//function to return menu items based on user's position
const showItems = (position) => {
    switch(position.toUpperCase()){
        case "ADMIN":
            return ADMINITEMS;
            break;
        case "STUDENT":
            return STUDENTITEMS;
            break;
        case "STAFF":
            return STAFFITEMS;
            break;
        case "HOD":
            return MANAGEMENTITEMS;
            break;
        case "PRINCIPAL":
            return MANAGEMENTITEMS;
            break;
        case "DVC ACADEMIC":
            return MANAGEMENTITEMS;
            break;
        case "NON-ACADEMIC STAFF":
            return STAFFITEMS;
            break;
        default:
            return UNKNOWNITEMS;
            break;
    }
};

//function to return a dashboard based on a user's position
const showDashboard = (position) => {
    switch(position.toUpperCase()){
        case "ADMIN":
            return <AdminDashboard/>;
            break;
        case "STUDENT":
            return <StudentDashboard/>;
            break;
        case "STAFF":
            return <StaffDashboard/>;
            break;
        case "HOD":
            return <StaffDashboard/>;
            break;
        case "PRINCIPAL":
            return <StaffDashboard/>;
            break;
        case "DVC ACADEMIC":
                return <StaffDashboard/>;
                break;
        case "NON-ACADEMIC STAFF":
            return <StaffDashboard/>;
            break;
        default:
            return <UnknownDashboard/>;
            break;
    }
};

//function to return a list of staff leaves based on the position
const getStaffLeaves = (position) => {
    switch(position.toUpperCase()){
        case "HOD":
            return <HODReceivedStaffLeaves/>;
            break;
        case "PRINCIPAL":
            return <PrincipalReceivedStaffLeaves/>;
            break;
        case "DVC ACADEMIC":
            return <DVCReceivedStaffLeaves/>;
            break;
    }
};

const showColor = (percent) => {
    if(percent <= 40){
        return "rgba(255, 0, 0, .8)";
    }else if(percent > 40 && percent <= 75){
        return "rgba(0, 0, 255, .8)";
    }else{
        return "rgba(0, 255, 0, .8)";
    }
};

const bankList = () => {
    const bankList = [
        'NMB', 'CRDB', 'ABSA', 'NBC', 'AKIBA', 'ACB', 'DTB'
    ];

    return bankList.sort();
};

//manipulating dates

//function to get the day
const getDayName = date => {

    var day;

    switch(new Date(date).getDay()){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }

    return day;

}

//function to get the month
const getMonthName = date => {

    var month;

    switch(new Date(date).getMonth()){
        case 0:
            month = "Jan";
            break;
        case 1:
            month = "Febr";
            break;
        case 2:
            month = "Mar";
            break;
        case 3:
            month = "Apr";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "Jun";
            break;
        case 6:
            month = "Jul";
            break;
        case 7:
            month = "Aug";
            break;
        case 8:
            month = "Sept";
            break;
        case 9:
            month = "Oct";
            break;
        case 10:
            month = "Nov";
            break;
        case 11:
            month = "Dec";
            break;
    }

    return month;

}

//function to show actual date
const showDate = (date) => {
    return `${getDayName(date)} ${getMonthName(date)} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`;
}

//function to return the progress response color of a particular leave
const showProgressColorOfLeave = (status) => {
    let color;
    if(status === "pending"){
        color = "#F46005";
    }else if(status === "rejected"){
        color = "#F21616";
    }else{
        color = "#3FAD05";
    }

    return color;
};

//function to show progress bar for each leave
const getResponse = (hod, principal, dvc) => {
    let value = 10;
    if(hod === "approved" && principal !== "approved" && dvc !== "approved"){
        value += 30;
    }else if(hod === "approved" && principal === "approved" && dvc !== "approved"){
        value +=60;
    }else if(hod === "approved" && principal === "approved" && dvc === "approved"){
        value += 90;
    }

    return value;

};

//function to return the status on the progress 
const showStatusProgressBar = (record) => {
    let status;
    if(getResponse(record.hod, record.principal, record.dvc) < 100){
        status = "active"
    }

    return status;
}

//function to show the strokecolor of the progress bar
const getStrokeColor = (record) => {
    let strokecolor;
    if(getResponse(record.hod, record.principal, record.dvc) > 40 && getResponse(record.hod, record.principal, record.dvc) < 100){
        strokecolor = "#F46005";
    }else if(getResponse(record.hod, record.principal, record.dvc) < 40){
        strokecolor = "#D8B206";
    }

    return strokecolor;
}


const countUsers = (position) => {
    let count = 0;
    countUsersByPosition(
        position,
        (data) => {
            count = data.users;
        },
        (error) => {
            console.log(error);
        }
    );

    return count;
};

const hideString = string => {
    let hidden = "";
    for(let i = 0; i < string.length; i++){
        hidden = hidden + "*";
    }

    return hidden;
};

//function to return dvc from DVC Academic
const showPosition = position => {
    let aposition = "";
    if(position === "DVC Academic"){
        aposition = "DVC";
    }else{
        aposition = position;
    }

    return aposition;

};

export { showItems, showDashboard, 
    showColor, bankList, 
    showDate, showProgressColorOfLeave, 
    getStaffLeaves, countUsers,
    hideString, showPosition, getResponse, 
    showStatusProgressBar, getStrokeColor
};