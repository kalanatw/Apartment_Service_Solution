require("dotenv").config()



const app =require("./app")

const port = process.env.PORT;


app.listen(8000,()=>{
    console.log("Server is up on port 8000")
    
})