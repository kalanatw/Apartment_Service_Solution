import baseAPI from "./_baseURL";

const adminregistration = async (body)=>{
    try {
        console.log(body)
        const res = await baseAPI.post("adminregistration/createAdminUser",body)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export {
    adminregistration
}