import { 
    LOGIN, 
    LOGOUT,
    REGISTERUSER, 
    GETPROFILE,
    GETUSERLOGGEDIN,
    GETALLUSERS,
    DELETEUSER,
    COUNTUSERS,
    GETSTAFFUSERS
} from "../../Api";

//function to register a new user to the system
export const registerUser = async (first_name, middle_name, last_name, email, password, role, position, cbsf, cbef) => {
    try{
        const response = await fetch(REGISTERUSER, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name: first_name,
                middle_name: middle_name,
                last_name: last_name,
                email: email,
                password: password,
                role: role,
                position: position
            })
        });

        const data = await response.json();
        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

export const login = async (email, password, cbsf, cbef) => {
    try{
        const response = await fetch(LOGIN, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();
        cbsf(data);
    }catch(error){
        cbef(error)
    }
};

export const logout = async (email, cbsf, cbef) => {
    try{
        const response = await fetch(LOGOUT, {
            method: "PUT",
            headers: { 
                "Access-Control-Allow-Origin": "*", 
                "Access-Control-Allow-Methods":"POST",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Expose-Headers": "*",
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                email: email
            })
        });

        const data = await response.json();
        
        cbsf(data);
    }catch(error){
        cbef(error);
    }
};

export const getProfile = async (token, cbsf, cbef) => {
    try{
        //cbsf(token);
        const response = await fetch(GETPROFILE, {
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

//getting the details of a user who just loggedin
export const getUserLoggedInDetails = async (token, cbsf, cbef) => {
    try{
        const response = await fetch(GETUSERLOGGEDIN, {
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

//getting a list of all users
export const getAllUsers = async (cbsf, cbef) => {
    try{
        const response = await fetch(GETALLUSERS, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        cbsf(data);
    }catch(error){
        cbef(error);
    }
};

//function to delete a user
export const deleteUser = async (_id, cbsf, cbef) => {
    try{
        const response = await fetch(DELETEUSER + _id, {
            method: "DELETE",
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

//function to count users by position
export const countUsersByPosition = async (pos_name, cbsf, cbef) => {
    try{
        const response = await fetch(COUNTUSERS + pos_name, {
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

//Fetching users who are staff - to be updated later to allow dynamics
export const getStaffUsers = async (pos_name, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTAFFUSERS + pos_name, {
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