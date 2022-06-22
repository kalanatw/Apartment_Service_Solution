import baseAPI from "./_baseURL";

const addBill = async (body)=>{
    try {
        console.log(body)
        const res = await baseAPI.post("utilityBill/create",body)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export {
    addBill
}