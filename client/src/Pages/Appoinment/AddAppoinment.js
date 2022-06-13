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
    console.log({name,numOfGuest,NIC,date,mobileNo,expDate})
    const res = await addAppoinment({
      "appointmentStatus":"Active",
      "appointmentName":"Jimmyyyyyyyyyyy",
      "numOfGuest":9
  })
    alert(res)
  }
    return(
<>
<div className ="inline">
<h2>Add Appoinment</h2>
<br/>
<div className='bodycss'>
<div className='formbody'>
<Form onSubmit={submitAppoinment}>
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
    <Form.Label className="lablecss">Date</Form.Label>
    <Form.Control type="date" placeholder="Date of visiting" className='inputcss' onChange={(e)=>setdate(e.target.value)}/>
  </Form.Group>
  <br/><br/>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="lablecss">Mobile No</Form.Label>
    <Form.Control type="text" placeholder="Mobile number" className='inputcss' onChange={(e)=>setmobileNo(e.target.value)}/>
  </Form.Group>
  <br/><br/>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="lablecss">Expiration Date</Form.Label>
    <Form.Control type="date" placeholder="Deppature date" className='inputcss' onChange={(e)=>setexpDate(e.target.value)}/>
  </Form.Group>
  <br/><br/><br/>

  
  <Button variant="primary" type="submit" className='submitcss'>
    Submit
  </Button>
</Form>
</div>
</div>
</div>
</>
    );
}

export default AddAppoinment;