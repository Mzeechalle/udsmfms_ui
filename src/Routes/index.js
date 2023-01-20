import React, { Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoutes';
import{ useAuth } from "../Authentication/auth-context";
import PanelLayout from '../Views/PanelLayout';
import Dashboard from '../Components/Dashboard';
import Staff from '../Views/Staff';
import Students from '../Views/Students';
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
import StaffLeaves from '../Views/Staff/StaffLeaves';
import ViewLeave from '../Views/Staff/StaffLeaves/ViewLeave';
import ApplyLeave from '../Views/Staff/StaffLeaves/ApplyLeave';
import CreateStaffProfile from '../Views/Staff/StaffProfile/createStaffProfile';
import UpdateProfile from '../Views/Staff/StaffProfile/UpdateProfile';
import ReceivedRequests from '../Views/Management/ReceivedRequests';
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
                        component={Students}
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
                        path="/myleaves"
                        name="myleaves"
                        component={StaffLeaves}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/viewleave"
                        name="viewleave"
                        component={ViewLeave}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/applyleave"
                        name="applyleave"
                        component={ApplyLeave}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/createstaffprofile"
                        name="create_staff_profile"
                        component={CreateStaffProfile}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/updatestaffprofile"
                        name="update_staff_profile"
                        component={UpdateProfile}
                        isAuth={isAuth}
                    />
                    <ProtectedRoute
                        path="/requests"
                        name="received_requests"
                        component={ReceivedRequests}
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