import {React,useState} from "react";
import {Form,Button} from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import './appoinment.css'; 

function GenerateOTP(){
    // const [number,setNumber] =useState(Math.floor(1000 + Math.random() * 9000))
    const {num} = useParams();
    
    return(

        <>
        <h2 className="GOTP">Add an Appoinment</h2>
    
<div className="OTPWin">
<h2 className="GOTP" onClick={()=>{
            navigator.clipboard.writeText(num)
        }}>{num}</h2>
        <p style={{textAlign:"center"}}>Please ask your guest  to use this otp to enter the premises</p>

</div>
<br/>
<Button variant="primary"  className='submitcss'>
   
    Reset OTP
  </Button>
       
        </>
        
            );
           
        }

        
export default GenerateOTP;