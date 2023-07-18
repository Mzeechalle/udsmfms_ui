import { 
    CREATESTUDENTPROFILE,
    GETALLSTUDENT,
    GETSTUDENTPROFILE,
    STUDENTAPPLYPOSTPONEMENT,
    GETSTUDENTPOSTPONEMENTS,
    DELETESTUDENTPOSTPONEMENT,
    UPDATESTUDENTPOSTPONEMENTPROGRESS,
    GETSTUDENTPOSTPONEMENTBYID,
    GETHODSTUDENTPOSTPONEMENTS,
    GETSTUDENTPOSTPONEMENTWITHPROFILEDATA,
    GETAPPROVEDSTUDENTPOSTPONEMENTS,
    COUNTSTUDENTPOSTPONEMENTS,
    GETRECENTSTUDENTPOSTPONEMENTS,
    STUDENTAPPLYRESUMESTUDIES,
    GETSTUDENTRESUMESTUDIES,
    DELETESTUDENTRESUMESTUDIES,
    UPDATESTUDENTRESUMESTUDIESPROGRESS,
    GETSTUDENTRESUMESTUDIESBYID,
    GETHODSTUDENTRESUMESTUDIES,
    GETSTUDENTRESUMESTUDIESWITHPROFILEDATA,
    GETAPPROVEDSTUDENTRESUMESTUDIES,
    COUNTSTUDENTRESUMESTUDIES,
    GETRECENTSTUDENTRESUMESTUDIES,
    STUDENTAPPLYSPECIALEXAM,
    GETSTUDENTSPECIALEXAMS,
    DELETESTUDENTSPECIALEXAM,
    UPDATESTUDENTSPECIALEXAMPROGRESS,
    GETSTUDENTSPECIALEXAMBYID,
    GETHODSTUDENTSPECIALEXAMS,
    GETMOSTUDENTSPECIALEXAMS,
    GETSTUDENTSPECIALEXAMWITHPROFILEDATA,
    GETAPPROVEDSTUDENTSPECIALEXAMS,
    COUNTSTUDENTSPECIALEXAMS,
    GETRECENTSTUDENTSPECIALEXAMS,
    STUDENTAPPLYSPECIALTEST,
    GETSTUDENTSPECIALTESTS,
    DELETESTUDENTSPECIALTEST,
    UPDATESTUDENTSPECIALTESTPROGRESS,
    GETSTUDENTSPECIALTESTBYID,
    GETHODSTUDENTSPECIALTESTS,
    GETMOSTUDENTSPECIALTESTS,
    GETSTUDENTSPECIALTESTWITHPROFILEDATA,
    GETAPPROVEDSTUDENTSPECIALTESTS,
    COUNTSTUDENTSPECIALTESTS,
    GETRECENTSTUDENTSPECIALTESTS
} from "../../Api";


//function to create a student profile
export const createStudentProfile = async (
    student,email, dob, phone, programme, regno, signature, department, college, image, cbsf, cbef
    ) => {
        try{
            const response = await fetch(CREATESTUDENTPROFILE, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    student: student,
                    college: college,
                    department: department,
                    email: email,
                    dob: dob,
                    phone: phone,
                    programme: programme,
                    regno: regno,
                    image: image,
                    signature: signature
                })
            });

            const data = await response.json();

            cbsf(data);

        }catch(error){
            cbef(error);
        }
};

//function to fetch all student from the db
export const getAllStudent = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(GETALLSTUDENT, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                authorization: "Bearer " + token
            }
        });

        const data = await response.json();
        cbsf(data);
        
    }catch(error){
        cbef(error);
    }
};

//function to get a student profile
export const getStudentProfile = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTUDENTPROFILE, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();
        cbsf(data);
    }catch(error){
        cbef(error);
    }
};

//function to create a student postponement
export const createStudentPostponement = async (token, creator, message, cbsf, cbef) => {
    try{
        const response = await fetch(STUDENTAPPLYPOSTPONEMENT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + token
            },
            body: JSON.stringify({
                creator: creator,
                message: message
            })
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get all student postponements
export const getStudentPostponements = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTUDENTPOSTPONEMENTS, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to count all student postponements
export const countStudentPostponements = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(COUNTSTUDENTPOSTPONEMENTS, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to delete a student postponement request
export const deleteStudentPostponementRequest = async (token, _id, cbsf, cbef) => {
    try{
        const response = await fetch(DELETESTUDENTPOSTPONEMENT + _id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();

        cbsf(data);
        
    }catch(error){
        cbef(error)
    }
};

//function to update student postponement progress
export const updateStudentPostponementProgress = async (_id, student_email, attribute, status, reason = "N/A", cbsf, cbef) => {
    try{
        const response = await fetch(UPDATESTUDENTPOSTPONEMENTPROGRESS + _id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                student_email: student_email,
                attribute: attribute,
                status: status,
                reason: reason
            })
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get one student postponement by id
export const getStudentPostponementById = async (_id, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTUDENTPOSTPONEMENTBYID + _id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);
        
    }catch(error){
        cbef(error);
    }
};

//get hod assigned student postponements
export const getHoDAssignedStudentPostponements = async (cbsf, cbef) => {
    try{
        const response = await fetch(GETHODSTUDENTPOSTPONEMENTS, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//get approved by person student postponements
export const getApprovedStudentPostponements = async (person, cbsf, cbef) => {
    try{
        const response = await fetch(GETAPPROVEDSTUDENTPOSTPONEMENTS + person, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get student postponement request with a student profile data
export const getStudentPostponementWithProfileData = async (_id, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTUDENTPOSTPONEMENTWITHPROFILEDATA + _id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get recent added student postponements
export const getRecentStudentPostponements = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(GETRECENTSTUDENTPOSTPONEMENTS, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};


//function to create a student special test
export const createStudentSpecialTest = async (token, creator, message, cbsf, cbef) => {
    try{
        const response = await fetch(STUDENTAPPLYSPECIALTEST, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + token
            },
            body: JSON.stringify({
                creator: creator,
                message: message
            })
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get all student special tests
export const getStudentSpecialTests = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTUDENTSPECIALTESTS, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to count all student special tests
export const countStudentSpecialTests = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(COUNTSTUDENTSPECIALTESTS, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to delete a student special test request
export const deleteStudentSpecialTestRequest = async (token, _id, cbsf, cbef) => {
    try{
        const response = await fetch(DELETESTUDENTSPECIALTEST + _id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();

        cbsf(data);
        
    }catch(error){
        cbef(error)
    }
};

//function to update student special test progress
export const updateStudentSpecialTestProgress = async (_id, student_email, attribute, status, reason = "N/A", cbsf, cbef) => {
    try{
        const response = await fetch(UPDATESTUDENTSPECIALTESTPROGRESS + _id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                student_email: student_email,
                attribute: attribute,
                status: status,
                reason: reason
            })
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get one student special test by id
export const getStudentSpecialTestById = async (_id, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTUDENTSPECIALTESTBYID + _id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);
        
    }catch(error){
        cbef(error);
    }
};

//get hod assigned student special tests
export const getHoDAssignedStudentSpecialTests = async (cbsf, cbef) => {
    try{
        const response = await fetch(GETHODSTUDENTSPECIALTESTS, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//get mo assigned student special tests
export const getMoAssignedStudentSpecialTests = async (cbsf, cbef) => {
    try{
        const response = await fetch(GETMOSTUDENTSPECIALTESTS, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//get approved by person student special tests
export const getApprovedStudentSpecialTests = async (person, cbsf, cbef) => {
    try{
        const response = await fetch(GETAPPROVEDSTUDENTSPECIALTESTS + person, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get student special test request with a student profile data
export const getStudentSpecialTestWithProfileData = async (_id, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTUDENTSPECIALTESTWITHPROFILEDATA + _id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get recent added student special tests
export const getRecentStudentSpecialTests = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(GETRECENTSTUDENTSPECIALTESTS, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};


//function to create a student special exam
export const createStudentSpecialExam = async (token, creator, message, cbsf, cbef) => {
    try{
        const response = await fetch(STUDENTAPPLYSPECIALEXAM, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + token
            },
            body: JSON.stringify({
                creator: creator,
                message: message
            })
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get all student special exams
export const getStudentSpecialExams = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTUDENTSPECIALEXAMS, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to count all student special exams
export const countStudentSpecialExams = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(COUNTSTUDENTSPECIALEXAMS, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to delete a student special exam request
export const deleteStudentSpecialExamRequest = async (token, _id, cbsf, cbef) => {
    try{
        const response = await fetch(DELETESTUDENTSPECIALEXAM + _id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();

        cbsf(data);
        
    }catch(error){
        cbef(error)
    }
};

//function to update student special exam progress
export const updateStudentSpecialExamProgress = async (_id, student_email, attribute, status, reason = "N/A", cbsf, cbef) => {
    try{
        const response = await fetch(UPDATESTUDENTSPECIALEXAMPROGRESS + _id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                student_email: student_email,
                attribute: attribute,
                status: status,
                reason: reason
            })
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get one student special exam by id
export const getStudentSpecialExamById = async (_id, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTUDENTSPECIALEXAMBYID + _id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);
        
    }catch(error){
        cbef(error);
    }
};

//get hod assigned student special exams
export const getHoDAssignedStudentSpecialExams = async (cbsf, cbef) => {
    try{
        const response = await fetch(GETHODSTUDENTSPECIALEXAMS, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//get mo assigned student special exams
export const getMoAssignedStudentSpecialExams = async (cbsf, cbef) => {
    try{
        const response = await fetch(GETMOSTUDENTSPECIALEXAMS, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//get approved by person student special exams
export const getApprovedStudentSpecialExams = async (person, cbsf, cbef) => {
    try{
        const response = await fetch(GETAPPROVEDSTUDENTSPECIALEXAMS + person, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get student special exam request with a student profile data
export const getStudentSpecialExamWithProfileData = async (_id, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTUDENTSPECIALEXAMWITHPROFILEDATA + _id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get recent added student special exams
export const getRecentStudentSpecialExams = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(GETRECENTSTUDENTSPECIALEXAMS, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};


//function to create a student resume of studies
export const createStudentResumeStudies = async (token, creator, message, cbsf, cbef) => {
    try{
        const response = await fetch(STUDENTAPPLYRESUMESTUDIES, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + token
            },
            body: JSON.stringify({
                creator: creator,
                message: message
            })
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get all student resume of studies
export const getStudentResumeStudies = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTUDENTRESUMESTUDIES, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to count all student resume of studies
export const countStudentResumeStudies = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(COUNTSTUDENTRESUMESTUDIES, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to delete a student resume of studies request
export const deleteStudentResumeStudiesRequest = async (token, _id, cbsf, cbef) => {
    try{
        const response = await fetch(DELETESTUDENTRESUMESTUDIES + _id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();

        cbsf(data);
        
    }catch(error){
        cbef(error)
    }
};

//function to update student resume of studies progress
export const updateStudentResumeStudiesProgress = async (_id, student_email, attribute, status, reason = "N/A", cbsf, cbef) => {
    try{
        const response = await fetch(UPDATESTUDENTRESUMESTUDIESPROGRESS + _id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                student_email: student_email,
                attribute: attribute,
                status: status,
                reason: reason
            })
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get one student resume of studies by id
export const getStudentResumeStudiesById = async (_id, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTUDENTRESUMESTUDIESBYID + _id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);
        
    }catch(error){
        cbef(error);
    }
};

//get hod assigned student resume of studies
export const getHoDAssignedStudentResumeStudies = async (cbsf, cbef) => {
    try{
        const response = await fetch(GETHODSTUDENTRESUMESTUDIES, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//get approved by person student resume of studies
export const getApprovedStudentResumeStudies = async (person, cbsf, cbef) => {
    try{
        const response = await fetch(GETAPPROVEDSTUDENTRESUMESTUDIES + person, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get student resume of studies request with a student profile data
export const getStudentResumeStudiesWithProfileData = async (_id, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTUDENTRESUMESTUDIESWITHPROFILEDATA + _id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get recent added student resume of studies
export const getRecentStudentResumeStudies = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(GETRECENTSTUDENTRESUMESTUDIES, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': "Bearer " + token
            }
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};