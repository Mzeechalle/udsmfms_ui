const HOST_URL = `http://localhost:5000/api`;

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

export const CREATESTUDENTPROFILE  = new URL( HOST_URL + "/student/create_profile" );
export const GETALLSTUDENT = new URL( HOST_URL + "/student/get_all_student" );
export const GETSTUDENTPROFILE = new URL ( HOST_URL + "/student/profile" );

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

export const STUDENTAPPLYPOSTPONEMENT = new URL( HOST_URL + "/student/create_student_postponement" );
export const GETSTUDENTPOSTPONEMENTS = new URL( HOST_URL + "/student/get_student_postponements" );
export const DELETESTUDENTPOSTPONEMENT = new URL(  HOST_URL + "/student/delete_student_postponement/");
export const UPDATESTUDENTPOSTPONEMENTPROGRESS = new URL( HOST_URL + "/student/update_student_postponement_progress/" );
export const GETSTUDENTPOSTPONEMENTBYID = new URL( HOST_URL + "/student/get_student_postponement_by_id/" );
export const GETHODSTUDENTPOSTPONEMENTS = new URL( HOST_URL + "/student/get_submitted_student_postponements");
export const GETSTUDENTPOSTPONEMENTWITHPROFILEDATA = new URL( HOST_URL + "/student/get_student_postponement_with_profile/" );
export const GETAPPROVEDSTUDENTPOSTPONEMENTS = new URL( HOST_URL + "/student/get_approved_student_postponements/" );
export const COUNTSTUDENTPOSTPONEMENTS = new URL( HOST_URL + "/student/count_student_postponements" );
export const GETRECENTSTUDENTPOSTPONEMENTS = new URL( HOST_URL + "/student/get_recent_student_postponements" );

export const STUDENTAPPLYRESUMESTUDIES = new URL( HOST_URL + "/student/create_student_resumestudies" );
export const GETSTUDENTRESUMESTUDIES = new URL( HOST_URL + "/student/get_student_resumestudies" );
export const DELETESTUDENTRESUMESTUDIES = new URL(  HOST_URL + "/student/delete_student_resumestudies/");
export const UPDATESTUDENTRESUMESTUDIESPROGRESS = new URL( HOST_URL + "/student/update_student_resumestudies_progress/" );
export const GETSTUDENTRESUMESTUDIESBYID = new URL( HOST_URL + "/student/get_student_resumestudies_by_id/" );
export const GETHODSTUDENTRESUMESTUDIES = new URL( HOST_URL + "/student/get_submitted_student_resumestudies");
export const GETSTUDENTRESUMESTUDIESWITHPROFILEDATA = new URL( HOST_URL + "/student/get_student_resumestudies_with_profile/" );
export const GETAPPROVEDSTUDENTRESUMESTUDIES = new URL( HOST_URL + "/student/get_approved_student_resumestudies/" );
export const COUNTSTUDENTRESUMESTUDIES = new URL( HOST_URL + "/student/count_student_resumestudies" );
export const GETRECENTSTUDENTRESUMESTUDIES = new URL( HOST_URL + "/student/get_recent_student_resumestudies" );

export const STUDENTAPPLYSPECIALEXAM = new URL( HOST_URL + "/student/create_student_specialexam" );
export const GETSTUDENTSPECIALEXAMS = new URL( HOST_URL + "/student/get_student_specialexams" );
export const DELETESTUDENTSPECIALEXAM = new URL(  HOST_URL + "/student/delete_student_specialexam/");
export const UPDATESTUDENTSPECIALEXAMPROGRESS = new URL( HOST_URL + "/student/update_student_specialexam_progress/" );
export const GETSTUDENTSPECIALEXAMBYID = new URL( HOST_URL + "/student/get_student_specialexam_by_id/" );
export const GETHODSTUDENTSPECIALEXAMS = new URL( HOST_URL + "/student/get_submitted_student_specialexams");
export const GETMOSTUDENTSPECIALEXAMS = new URL( HOST_URL + "/student/get_submitted_student_specialexams");
export const GETSTUDENTSPECIALEXAMWITHPROFILEDATA = new URL( HOST_URL + "/student/get_student_specialexam_with_profile/" );
export const GETAPPROVEDSTUDENTSPECIALEXAMS = new URL( HOST_URL + "/student/get_approved_student_specialexams/" );
export const COUNTSTUDENTSPECIALEXAMS = new URL( HOST_URL + "/student/count_student_specialexams" );
export const GETRECENTSTUDENTSPECIALEXAMS = new URL( HOST_URL + "/student/get_recent_student_specialexams" );

export const STUDENTAPPLYSPECIALTEST = new URL( HOST_URL + "/student/create_student_specialtest" );
export const GETSTUDENTSPECIALTESTS = new URL( HOST_URL + "/student/get_student_specialtests" );
export const DELETESTUDENTSPECIALTEST = new URL(  HOST_URL + "/student/delete_student_specialtest/");
export const UPDATESTUDENTSPECIALTESTPROGRESS = new URL( HOST_URL + "/student/update_student_specialtest_progress/" );
export const GETSTUDENTSPECIALTESTBYID = new URL( HOST_URL + "/student/get_student_specialtest_by_id/" );
export const GETHODSTUDENTSPECIALTESTS = new URL( HOST_URL + "/student/get_submitted_student_specialtests");
export const GETMOSTUDENTSPECIALTESTS = new URL( HOST_URL + "/student/get_submitted_student_specialtests");
export const GETSTUDENTSPECIALTESTWITHPROFILEDATA = new URL( HOST_URL + "/student/get_student_specialtest_with_profile/" );
export const GETAPPROVEDSTUDENTSPECIALTESTS = new URL( HOST_URL + "/student/get_approved_student_specialtests/" );
export const COUNTSTUDENTSPECIALTESTS = new URL( HOST_URL + "/student/count_student_specialtests" );
export const GETRECENTSTUDENTSPECIALTESTS = new URL( HOST_URL + "/student/get_recent_student_specialtests" );