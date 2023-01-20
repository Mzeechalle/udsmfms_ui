import { GETCOLLEGES, CREATECOLLEGE } from "../../Api";


//function to create a college
export const createCollege = async (college_name, college_abbrv, cbsf, cbef) => {
    try{
        const response = await fetch(CREATECOLLEGE, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                college_name: college_name,
                college_abbrv: college_abbrv
            })
        });

        const data = await response.json();

        cbsf(data);

    }catch(error){
        cbef(error);
    }
};

//function to fetch colleges from the api
export const getColleges = async (cbsf, cbef) => {
    try{
        const response = await fetch(GETCOLLEGES, {
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