const HOST_URL = `http://localhost:5000/api`;
//const HOST_URL = `https://coictfms.kelvinkedyson.com:5000/api`;

export const LOGIN = new URL( HOST_URL + "/users/login" );
export const LOGOUT = new URL( HOST_URL + "/users/logout" );
export const REGISTERUSER = new URL( HOST_URL + "/users/register" );
export const GETPROFILE = new URL( HOST_URL + "/staff/profile" );
export const GETUSERLOGGEDIN = new URL( HOST_URL + "/users/get_login_user_details" );
export const GETALLUSERS = new URL( HOST_URL + "/users/get_users" );
export const DELETEUSER = new URL( HOST_URL + "/users/delete_user/" );
export const COUNTUSERS = new URL( HOST_URL + "/users/count_users/" );
export const GETSTAFFUSERS = new URL( HOST_URL + "/users/get_staff_users/" );


export const GETDEPARTMENTS = new URL( HOST_URL + "/departments/get_departments" );
export const CREATEDEPARTMENT = new URL( HOST_URL + "/departments/create_department" );
export const UPDATEDEPARTMENT = new URL( HOST_URL + "/departments/update_department/" );

export const CREATESTAFFPROFILE  = new URL( HOST_URL + "/staff/create_profile" );
export const GETALLSTAFF = new URL( HOST_URL + "/staff/get_all_staff" );
export const GETSTAFFPROFILE = new URL ( HOST_URL + "/staff/profile" );

export const CREATEPOSITION = new URL( HOST_URL + "/positions/create_position" );
export const GETALLPOSITIONS = new URL( HOST_URL + "/positions/get_positions" );
export const DELETEPOSITION = new URL( HOST_URL + "/positions/delete_position/" );

export const GETALLROLES = new URL( HOST_URL + "/roles/get_roles" );
export const REGISTERROLE = new URL( HOST_URL + "/roles/register_role" );
export const UPDATEROLE = new URL( HOST_URL + "/roles/update_role/" );
export const DELETEROLE = new URL( HOST_URL + "/roles/delete_role/");

export const STAFFAPPLYLEAVE = new URL( HOST_URL + "/staff/create_staff_leave" );
export const GETSTAFFLEAVES = new URL( HOST_URL + "/staff/get_staff_leaves" );
export const DELETESTAFFLEAVE = new URL(  HOST_URL + "/staff/delete_staff_leave/");
export const UPDATESTAFFLEAVEPROGRESS = new URL( HOST_URL + "/staff/update_staff_leave_progress/" );
export const GETSTAFFLEAVEBYID = new URL( HOST_URL + "/staff/get_staff_leave_by_id/" );
export const GETHODSTAFFLEAVES = new URL( HOST_URL + "/staff/get_submitted_staff_leaves");
export const GETSTAFFLEAVEWITHPROFILEDATA = new URL( HOST_URL + "/staff/get_staff_leave_with_profile/" );
export const GETSTAFFLEAVEBALANCE = new URL( HOST_URL + "/staff/get_staff_leave_balance/" );
export const GETAPPROVEDSTAFFLEAVES = new URL( HOST_URL + "/staff/get_approved_staff_leaves/" );
export const COUNTSTAFFLEAVES = new URL( HOST_URL + "/staff/count_staff_leaves" );
export const GETRECENTSTAFFLEAVES = new URL( HOST_URL + "/staff/get_recent_staff_leaves" );

export const GETCOLLEGES = new URL( HOST_URL + "/college/get_colleges");
export const CREATECOLLEGE = new URL( HOST_URL + "/college/create_college" );
export const UPLOADIMAGE = new URL(HOST_URL + "/images/upload_image");