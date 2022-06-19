import baseAPI from "./_baseURL";

const addAdminUser = async (body)=>{
    try {
        console.log(body)
        const res = await baseAPI.post("/adminUser/AdminUser",body)
        return res.data;
    } catch (error) {
        throw error;
    }
}

export {
    addAdminUser
}