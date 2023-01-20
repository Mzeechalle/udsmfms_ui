import { 
    CREATESTAFFPROFILE,
    GETALLSTAFF,
    GETSTAFFPROFILE,
    STAFFAPPLYLEAVE,
    GETSTAFFLEAVES,
    DELETESTAFFLEAVE,
    UPDATESTAFFLEAVEPROGRESS,
    GETSTAFFLEAVEBYID,
    GETHODSTAFFLEAVES,
    GETSTAFFLEAVEWITHPROFILEDATA,
    GETSTAFFLEAVEBALANCE,
    GETAPPROVEDSTAFFLEAVES,
    COUNTSTAFFLEAVES,
    GETRECENTSTAFFLEAVES
} from "../../Api";


//function to create a staff profile
export const createStaffProfile = async (
    staff,email, marital_status, phone, address, bank_name, account_number, signature, spouse, family_members, image, cbsf, cbef
    ) => {
        try{
            const response = await fetch(CREATESTAFFPROFILE, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    staff: staff,
                    email: email,
                    marital_status: marital_status,
                    phone: phone,
                    address: address,
                    bank_name: bank_name,
                    account_number: account_number,
                    signature: signature,
                    spouse: spouse,
                    family_members: family_members,
                    image: image
                })
            });

            const data = await response.json();

            cbsf(data);

        }catch(error){
            cbef(error);
        }
};

//function to fetch all staff from the db
export const getAllStaff = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(GETALLSTAFF, {
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

//function to get a staff profile
export const getStaffProfile = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTAFFPROFILE, {
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

//function to create a staff leave
export const createStaffLeave = async (token, creator, message, start_date, end_date, cbsf, cbef) => {
    try{
        const response = await fetch(STAFFAPPLYLEAVE, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + token
            },
            body: JSON.stringify({
                creator: creator,
                message: message,
                start_date: start_date,
                end_date: end_date
            })
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get all staff leaves
export const getStaffLeaves = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTAFFLEAVES, {
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

//function to count all staff leaves
export const countStaffLeaves = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(COUNTSTAFFLEAVES, {
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

//function to delete a staff leave request
export const deleteStaffLeaveRequest = async (token, _id, cbsf, cbef) => {
    try{
        const response = await fetch(DELETESTAFFLEAVE + _id, {
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

//function to update staff leave progress
export const updateStaffLeaveProgress = async (_id, staff_email, attribute, status, reason = "N/A", cbsf, cbef) => {
    try{
        const response = await fetch(UPDATESTAFFLEAVEPROGRESS + _id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                staff_email: staff_email,
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

//function to get one staff leave by id
export const getStaffLeaveById = async (_id, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTAFFLEAVEBYID + _id, {
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

//get hod assigned staff leaves
export const getHoDAssignedStaffLeaves = async (cbsf, cbef) => {
    try{
        const response = await fetch(GETHODSTAFFLEAVES, {
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

//get approved by person staff leaves
export const getApprovedStaffLeaves = async (person, cbsf, cbef) => {
    try{
        const response = await fetch(GETAPPROVEDSTAFFLEAVES + person, {
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

//function to get staff leave request with a staff profile data
export const getStaffLeaveWithProfileData = async (_id, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTAFFLEAVEWITHPROFILEDATA + _id, {
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

//function to get staff leave balance
export const getStaffLeaveBalance = async (_id, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTAFFLEAVEBALANCE + _id, {
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

//function to get recent added staff leaves
export const getRecentStaffLeaves = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(GETRECENTSTAFFLEAVES, {
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