/*import baseAPI from "./_baseURL";

const addPaidAmount = async (body)=>{
    try {
        console.log(body)
        const res = await baseAPI.post("utilitybill/addUtilityBill",body)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export {
    addPaidAmount
}
*/
import baseAPI from "./_baseURL";

const addPaidAmount=async (body)=>{
    try{
    console.log(body)
    const res=await baseAPI.post("utilityBill/",body);
    return res.data;
    }
    catch(error){
        console.log(error);
    }
}