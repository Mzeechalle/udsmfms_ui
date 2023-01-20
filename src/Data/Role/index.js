import { REGISTERROLE, GETALLROLES, UPDATEROLE, DELETEROLE } from "../../Api";

//function to register a role (create a role)
export const addRole = async (role_id, role_name, cbsf, cbef) => {
    try{
        const response = await fetch(REGISTERROLE, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                role_id: role_id,
                role_name: role_name
            })
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get all roles from the remote db
export const getAllRoles = async (cbsf, cbef) => {
    try{
        const response = await fetch(GETALLROLES, {
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

//function to update a role
export const updateRole = async (_id, role_id, role_name, cbsf, cbef) => {
    try{
        const response = await fetch(UPDATEROLE + _id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                role_id: role_id,
                role_name: role_name
            })
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to delete a role
export const deleteRole =  async (_id, cbsf, cbef) => {
    try{
        const response = await fetch(DELETEROLE + _id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        cbsf(data);
        
    }catch(error){
        console.log(error);
    }
};