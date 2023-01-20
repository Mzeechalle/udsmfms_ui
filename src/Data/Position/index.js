import {
    CREATEPOSITION,
    GETALLPOSITIONS,
    DELETEPOSITION
} from "../../Api";

//function to create a position
export const createPosition = async (pos_id, pos_name, cbsf, cbef) => {
    try{
        const response = await fetch(CREATEPOSITION, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                pos_id: pos_id,
                pos_name: pos_name
            })
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to get all positions
export const getAllPositions = async (cbsf, cbef) => {
    try{
        const response = await fetch(GETALLPOSITIONS, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json();
        cbsf(data);
    }catch(error){
        cbef(error);
    }
};

//function to delete a position
export const deletePosition = async (_id, cbsf, cbef) => {
    try{
        const response = await fetch(DELETEPOSITION + _id, {
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