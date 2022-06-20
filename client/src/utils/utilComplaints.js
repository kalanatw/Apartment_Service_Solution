import baseAPI from "./_baseURL";

const complaintsUtil = async (body)=>{
    try {
        console.log(body)
        const res = await baseAPI.post("complaints/complaints",body)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export {
    complaintsUtil
}