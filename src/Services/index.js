const url_link = `https://kelvinkedyson.com:4700/api`
const GETSTAFFDATABYEMAIL = new URL( url_link + "/staff/get_staff_by_em/" )

export const getStaffByEmail = async (email, cbsf, cbef) => {
    try{
        const response = await fetch(GETSTAFFDATABYEMAIL + email, {
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