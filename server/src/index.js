require("dotenv").config()

const app =require("./app")

const port = process.env.PORT;


app.listen(9000,()=>{
    console.log("Server is up on port 4000")
    
})