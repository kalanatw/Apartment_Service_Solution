import {React,useState,useEffect} from "react";
import './SecondT.css'; 
import {Form,Button} from "react-bootstrap";
import { complaintsUtil } from "../../utils/utilComplaints";
//import {Routes, Route, useNavigate} from 'react-router-dom';



function CompForm(){

  const [compID,setcompID]= useState("")
  const [Reply,setReply]= useState("")
  const [cStatus,setcStatus]= useState("")
  const [formError,setFormError]= useState({})
  const [isSubmit,setIsSubmit]= useState(false)


  const complaintsform = async (event) =>{
    event.preventDefault();
    setFormError(validate({compID,Reply,cStatus}))
    setIsSubmit(true);
  }


  useEffect(()=>{
    console.log(Object.keys(formError).length)
    console.log(isSubmit)
    const addData = async ()=>{
      const res = await complaintsUtil({compID,Reply,cStatus})
      console.log(res)
    }
    if(Object.keys(formError).length===0 && isSubmit){
      addData()
    }
  },[isSubmit,formError])

  const validate = (values)=>{
    const error = {};
    if(!values.compID){
      error.compID = "Complaint ID is required!"
    }
    if(!values.Reply){
      error.Reply = "Reply is required!"
    }

    if(!values.cStatus){
      error.cStatus = "Current Status is required!"
    }


    return error;

  }

return(
<>
<main>
      <div className ="inline">
        <h2>Complaints Management</h2><br/>
        <div className='bodycss'>
          <div className='formbody'>
            <form onSubmit={complaintsform}>


                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lablecss">Enter Complaint ID </Form.Label>
                  : <Form.Control type="text" name="compID " className='inputcss' onChange={(e)=>setcompID(e.target.value)}/>
                    <p className="onlyerror">{formError.compID}</p>
                </Form.Group>
                <br/><br/>
              
                
 
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lablecss">Enter Reply </Form.Label>
                  : <Form.Control type="text" name="Reply" className='inputcss' onChange={(e)=>setReply(e.target.value)}/>
                    <p className="onlyerror">{formError.Reply}</p>
                </Form.Group>
                <br/><br/>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lablecss">Enter Current Status</Form.Label>
                  : <Form.Control type="text" name="cStatus" className='inputcss' onChange={(e)=>setcStatus(e.target.value)}/>
                  <p className="onlyerror">{formError.EntercStatus}</p>
                </Form.Group>
                <br/><br/>


                <Button  variant="primary" type="submit" className='submitcss'  >Submit</Button>
            </form>
          </div>
        </div>
      </div>
</main>
</>
);
}

export default CompForm;