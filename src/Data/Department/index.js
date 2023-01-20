import {
    GETDEPARTMENTS,
    CREATEDEPARTMENT,
    UPDATEDEPARTMENT
} from "../../Api";

//function to create a department
export const createDepartment = async (college, dept_name, dept_abbrv, dept_hod, dept_secretary, cbsf, cbef) => {
    try{
        const response = await fetch(CREATEDEPARTMENT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                college: college,
                dept_name: dept_name,
                dept_abbrv: dept_abbrv,
                dept_hod: dept_hod,
                dept_secretary: dept_secretary
            })
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
}

//fetching all departments
export const getAllDepartments = async (cbsf, cbef) => {
    try{
        const response = await fetch(GETDEPARTMENTS, {
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

//function to update a department
export const updateDepartment = async (_id, dept_name, dept_abbrv, dept_hod, dept_secretary, cbsf, cbef) => {
    try{
        const response = await fetch(UPDATEDEPARTMENT + _id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                dept_name: dept_name,
                dept_abbrv: dept_abbrv,
                dept_hod: dept_hod,
                dept_secretary: dept_secretary
            })
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};