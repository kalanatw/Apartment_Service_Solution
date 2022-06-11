import {React,useState} from "react";
import {Form,Button} from "react-bootstrap";
import './appoinment.css'; 
import {addAppoinment} from "../../utils/appoinment"

function AddAppoinment(){

  const [name,setName]= useState("")
  const [numOfGuest,setnumOfGuest]= useState(0)
  const [NIC,setNIC]= useState("")
  const [date,setdate]= useState("")
  const [mobileNo,setmobileNo]= useState("")
  const [expDate,setexpDate]= useState("")

  const submitAppoinment = async (event) =>{
    event.preventDefault();
    // console.log({appointmentName:name,numOfGuest,appointmentNIC:NIC,appointmentDate:date,mobileNumber:mobileNo,expireDate:expDate})
    const res = await addAppoinment({appointmentName:name,numOfGuest,appointmentNIC:NIC,appointmentDate:date,mobileNumber:mobileNo,expireDate:expDate})
    console.log(res)
    
  }
    return(
<>

<Form onSubmit={submitAppoinment}>
<h2>Add Appoinment</h2>
<br/>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="lablecss">Name</Form.Label>
    <Form.Control type="text" placeholder="Name of the guest" className='inputcss' onChange={(e)=>setName(e.target.value)}/>
  </Form.Group>
  <br/><br/>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="lablecss">No of Guests </Form.Label>
    <Form.Control type="number" placeholder="How many visitors" className='inputcss' onChange={(e)=>setnumOfGuest(e.target.value)}/>
  </Form.Group>
  <br/><br/>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="lablecss">NIC </Form.Label>
    <Form.Control type="text" placeholder="NIC" className='inputcss' onChange={(e)=>setNIC(e.target.value)}/>
  </Form.Group>
  <br/><br/>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="lablecss">Start Date</Form.Label>
    <Form.Control type="date" placeholder="Date of visiting" className='inputcss' onChange={(e)=>setdate(e.target.value)}/>
  </Form.Group>
  <br/><br/>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="lablecss">Mobile No</Form.Label>
    <Form.Control type="text" placeholder="Mobile number" className='inputcss' onChange={(e)=>setmobileNo(e.target.value)}/>
  </Form.Group>
  <br/><br/>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="lablecss">End Date</Form.Label>
    <Form.Control type="date" placeholder="Deppature date" className='inputcss' onChange={(e)=>setexpDate(e.target.value)}/>
  </Form.Group>
  <br/><br/><br/>

  
  <Button variant="primary" type="submit" className='submitcss' >
    Submit
  </Button>
</Form>
</>
    );
}

export default AddAppoinment;