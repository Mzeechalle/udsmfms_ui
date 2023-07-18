import { ADMINITEMS, STAFFITEMS, STUDENTITEMS, MANAGEMENTITEMS, UNKNOWNITEMS, MOI_TEMS } from "../Components/SideNav/menuItems";
import AdminDashboard from "../Components/Dashboard/admin";
import StaffDashboard from "../Components/Dashboard/staff";
import StudentDashboard from "../Components/Dashboard/student";
import UnknownDashboard from "../Components/Dashboard/unknown";

import HODReceivedStaffLeaves from "../Views/Management/ReceivedRequests/HoD";
import PrincipalReceivedStaffLeaves from "../Views/Management/ReceivedRequests/Principal";
import DVCReceivedStaffLeaves from "../Views/Management/ReceivedRequests/DVC";

import HODReceivedStudentPostponements from "../Views/Management/ReceivedPostponements/HoD";
import PrincipalReceivedStudentPostponements from "../Views/Management/ReceivedPostponements/Principal";
import DVCReceivedStudentPostponements from "../Views/Management/ReceivedPostponements/DVC";

import HODReceivedStudentResumeStudies from "../Views/Management/ReceivedResumeStudies/HoD";
import PrincipalReceivedStudentResumeStudies from "../Views/Management/ReceivedResumeStudies/Principal";
import DVCReceivedStudentResumeStudies from "../Views/Management/ReceivedResumeStudies/DVC";

import HODReceivedStudentSpecialTests from "../Views/Management/ReceivedSpecialTests/HoD";
import PrincipalReceivedStudentSpecialTests from "../Views/Management/ReceivedSpecialTests/Principal";
import DVCReceivedStudentSpecialTests from "../Views/Management/ReceivedSpecialTests/DVC";
import MoReceivedStudentSpecialTests from "../Views/Management/ReceivedSpecialTests/Mo";

import HODReceivedStudentSpecialExams from "../Views/Management/ReceivedSpecialExams/HoD";
import PrincipalReceivedStudentSpecialExams from "../Views/Management/ReceivedSpecialExams/Principal";
import DVCReceivedStudentSpecialExams from "../Views/Management/ReceivedSpecialExams/DVC";
import MoReceivedStudentSpecialExams from "../Views/Management/ReceivedSpecialExams/Mo";

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
        case "MEDICAL OFFICER INCHARGE":
            return MOI_TEMS;
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
        case "MEDICAL OFFICER INCHARGE":
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

//function to return a list of student postponements based on the position
const getStudentPostponements = (position) => {
    switch(position.toUpperCase()){
        case "HOD":
            return <HODReceivedStudentPostponements/>;
            break;
        case "PRINCIPAL":
            return <PrincipalReceivedStudentPostponements/>;
            break;
        case "DVC ACADEMIC":
            return <DVCReceivedStudentPostponements/>;
            break;
    }
};

//function to return a list of student resume of studies based on the position
const getStudentResumeStudies = (position) => {
    switch(position.toUpperCase()){
        case "HOD":
            return <HODReceivedStudentResumeStudies/>;
            break;
        case "PRINCIPAL":
            return <PrincipalReceivedStudentResumeStudies/>;
            break;
        case "DVC ACADEMIC":
            return <DVCReceivedStudentResumeStudies/>;
            break;
    }
};

//function to return a list of student special tests based on the position
const getStudentSpecialTests = (position) => {
    switch(position.toUpperCase()){
        case "MEDICAL OFFICER INCHARGE":
            return <MoReceivedStudentSpecialTests/>;
            break;
        case "HOD":
            return <HODReceivedStudentSpecialTests/>;
            break;
        case "PRINCIPAL":
            return <PrincipalReceivedStudentSpecialTests/>;
            break;
    }
};

//function to return a list of student special exams based on the position
const getStudentSpecialExams = (position) => {
    switch(position.toUpperCase()){
        case "MEDICAL OFFICER INCHARGE":
            return <MoReceivedStudentSpecialExams/>;
            break;
        case "HOD":
            return <HODReceivedStudentSpecialExams/>;
            break;
        case "PRINCIPAL":
            return <PrincipalReceivedStudentSpecialExams/>;
            break;
        case "DVC ACADEMIC":
            return <DVCReceivedStudentSpecialExams/>;
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

//function to return the progress response color of a particular postponement
const showProgressColorOfPostponement = (status) => {
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

//function to show progress bar for each request
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
const getSpecialExamResponse = (mo_incharge, hod, principal, dvc) => {
    let value = 12;
    if(mo_incharge === "approved" && hod !== "approved" && principal !== "approved" && dvc !== "approved"){
        value += 22;
    }else if(mo_incharge === "approved" && hod !== "approved" && principal !== "approved" && dvc !== "approved"){
        value += 44;
    }
    else if(mo_incharge === "approved" && hod === "approved" && principal === "approved" && dvc !== "approved"){
        value +=88;
    }else if(mo_incharge === "approved" && hod === "approved" && principal === "approved" && dvc === "approved"){
        value += 100;
    }

    return value;

};

const getSpecialTestResponse = (mo_incharge, hod, principal) => {
    let value = 10;
    if(mo_incharge === "approved" && hod !== "approved" && principal !== "approved" ){
        value += 30;
    }else if(mo_incharge === "approved" && hod !== "approved" && principal !== "approved" ){
        value += 60;
    }
    else if(mo_incharge === "approved" && hod === "approved" && principal === "approved" ){
        value +=90;
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
    getStaffLeaves,getStudentPostponements, getStudentResumeStudies, getStudentSpecialTests, getStudentSpecialExams, countUsers,
    hideString, showPosition, getResponse, getSpecialExamResponse, getSpecialTestResponse,
    showStatusProgressBar, getStrokeColor, showProgressColorOfPostponement
};