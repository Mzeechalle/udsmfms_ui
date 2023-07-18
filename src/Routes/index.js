import React, { Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoutes';
import{ useAuth } from "../Authentication/auth-context";
import PanelLayout from '../Views/PanelLayout';
import Dashboard from '../Components/Dashboard';
import Staff from '../Views/Staff';
import Student from '../Views/Student';
import Positions from '../Views/Positions';
import Roles from '../Views/Roles';
import Departments from '../Views/Departments';
import SystemUsers from '../Views/SystemUsers';
import AddDepartment from '../Views/Departments/AddDepartment';
import EditDepartment from '../Views/Departments/EditDepartment';
import EditPosition from '../Views/Positions/EditPosition';
import EditRole from '../Views/Roles/EditRole';
import AddUser from '../Views/SystemUsers/AddUser';
import EditUser from '../Views/SystemUsers/EditUser';
import StaffProfile from '../Views/Staff/StaffProfile';
import StudentProfile from '../Views/Student/StudentProfile';
import StaffLeaves from '../Views/Staff/StaffLeaves';
import StudentPostponements from '../Views/Student/StudentPostponements';
import StudentResumeStudies from '../Views/Student/StudentResumeStudies';
import StudentSpecialExams from '../Views/Student/StudentSpecialExams';
import StudentSpecialTests from '../Views/Student/StudentSpecialTests';
import ViewLeave from '../Views/Staff/StaffLeaves/ViewLeave';
import ViewPostponement from '../Views/Student/StudentPostponements/ViewPostponement';
import ViewResumeStudies from '../Views/Student/StudentResumeStudies/ViewResumeStudies';
import ViewSpecialExam from '../Views/Student/StudentSpecialExams/ViewSpecialExams';
import ViewSpecialTest from '../Views/Student/StudentSpecialTests/ViewSpecialTests';
import ApplyLeave from '../Views/Staff/StaffLeaves/ApplyLeave';
import ApplyPostponement from '../Views/Student/StudentPostponements/ApplyPostponement';
import ApplyResumeStudies from '../Views/Student/StudentResumeStudies/ApplyResumeStudies';
import ApplySpecialExam from '../Views/Student/StudentSpecialExams/ApplySpecialExams';
import ApplySpecialTest from '../Views/Student/StudentSpecialTests/ApplySpecialTests';
import CreateStaffProfile from '../Views/Staff/StaffProfile/createStaffProfile';
import CreateStudentProfile from '../Views/Student/StudentProfile/createStudentProfile';
import UpdateProfile from '../Views/Staff/StaffProfile/UpdateProfile';
import UpdateStudentProfile from '../Views/Student/StudentProfile/UpdateStudentProfile';
import ReceivedRequests from '../Views/Management/ReceivedRequests';
import ReceivedPostponements from '../Views/Management/ReceivedPostponements';
import ReceivedResumeStudies from '../Views/Management/ReceivedResumeStudies';
import ReceivedSpecialExams from '../Views/Management/ReceivedSpecialExams';
import ReceivedSpecialTests from '../Views/Management/ReceivedSpecialTests';
import Colleges from "../Views/Colleges";
import AddCollege from '../Views/Colleges/AddCollege';


const loading = () => {
    return(
        <h2>Loading...</h2>
    );
};

const Routes = () => {

    const { isLoggedIn } = useAuth();
    const isAuth = isLoggedIn || localStorage.getItem("isLoggedIn");

    return(
        <HashRouter>
            <Suspense fallback={loading()}>
                <Switch>
                    <ProtectedRoute
                        path="/dashboard"
                        name="dashboard"
                        component={Dashboard}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/departments"
                        name="departments"
                        component={Departments}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/positions"
                        name="positions"
                        component={Positions}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/roles"
                        name="roles"
                        component={Roles}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/staff"
                        name="staff"
                        component={Staff}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/students"
                        name="students"
                        component={Student}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/systemusers"
                        name="systemusers"
                        component={SystemUsers}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/adddepartment"
                        name="adddepartment"
                        component={AddDepartment}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/editdepartment"
                        name="editdepartment"
                        component={EditDepartment}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/editposition"
                        name="editposition"
                        component={EditPosition}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/editrole"
                        name="editrole"
                        component={EditRole}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/adduser"
                        name="adduser"
                        component={AddUser}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/edituser"
                        name="edituser"
                        component={EditUser}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/staffprofile"
                        name="staffprofile"
                        component={StaffProfile}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/studentprofile"
                        name="studentprofile"
                        component={StudentProfile}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/myleaves"
                        name="myleaves"
                        component={StaffLeaves}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/mypostponements"
                        name="mypostponements"
                        component={StudentPostponements}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/myresumestudies"
                        name="/myresumestudies"
                        component={StudentResumeStudies}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/myspecialexams"
                        name="myspecialexams"
                        component={StudentSpecialExams}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/myspecialtests"
                        name="myspecialtests"
                        component={StudentSpecialTests}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/viewleave"
                        name="viewleave"
                        component={ViewLeave}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/viewpostponement"
                        name="viewpostponement"
                        component={ViewPostponement}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/viewresumestudies"
                        name="viewresumestudies"
                        component={ViewResumeStudies}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/viewspecialexams"
                        name="viewspecialexam"
                        component={ViewSpecialExam}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/viewspecialtests"
                        name="viewspecialtest"
                        component={ViewSpecialTest}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/applyleave"
                        name="applyleave"
                        component={ApplyLeave}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/applypostponement"
                        name="applypostponement"
                        component={ApplyPostponement}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/applyresumestudies"
                        name="applyresumestudies"
                        component={ApplyResumeStudies}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/applyspecialexam"
                        name="applyspecialexam"
                        component={ApplySpecialExam}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/applyspecialtest"
                        name="applyspecialtest"
                        component={ApplySpecialTest}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/createstaffprofile"
                        name="create_staff_profile"
                        component={CreateStaffProfile}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/createstudentprofile"
                        name="create_student_profile"
                        component={CreateStudentProfile}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/updatestaffprofile"
                        name="update_staff_profile"
                        component={UpdateProfile}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/updatestudentprofile"
                        name="update_student_profile"
                        component={UpdateStudentProfile}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/requests"
                        name="received_requests"
                        component={ReceivedRequests}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/postponements"
                        name="received_postponements"
                        component={ReceivedPostponements}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/resumestudies"
                        name="received_resumestudies"
                        component={ReceivedResumeStudies}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/specialtests"
                        name="received_specialtests"
                        component={ReceivedSpecialTests}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/specialexams"
                        name="received_specialexams"
                        component={ReceivedSpecialExams}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/colleges"
                        name="colleges"
                        component={Colleges}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/addcollege"
                        name="add_college"
                        component={AddCollege}
                        isAuth={isAuth}
                    />
                </Switch>
            </Suspense>
        </HashRouter>
    );
};

export default Routes;