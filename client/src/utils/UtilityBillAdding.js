import baseAPI from "./_baseURL";

const addBill = async (body)=>{
    try {
        console.log(body)
        const res = await baseAPI.post("utilitybill/addUtilityBill",body)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export {
    addBill
}