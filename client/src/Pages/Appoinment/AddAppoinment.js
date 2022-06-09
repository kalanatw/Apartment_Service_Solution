import React from "react";
import {Form,Button} from "react-bootstrap";
import './appoinment.css'; 

function AddAppoinment(){
    return(
<>

<Form>
<h2>Add Appoinment</h2>
<br/>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="lablecss">Name</Form.Label>
    <Form.Control type="text" placeholder="Name of the guest" className='inputcss'/>
  </Form.Group>
  <br/><br/>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="lablecss">No of Guests </Form.Label>
    <Form.Control type="number" placeholder="How many visitors" className='inputcss' />
  </Form.Group>
  <br/><br/>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="lablecss">NIC </Form.Label>
    <Form.Control type="text" placeholder="NIC" className='inputcss' />
  </Form.Group>
  <br/><br/>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="lablecss">Date</Form.Label>
    <Form.Control type="date" placeholder="Date of visiting" className='inputcss' />
  </Form.Group>
  <br/><br/>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="lablecss">Mobile No</Form.Label>
    <Form.Control type="text" placeholder="Mobile number" className='inputcss'/>
  </Form.Group>
  <br/><br/>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="lablecss">Expiration Date</Form.Label>
    <Form.Control type="date" placeholder="Deppature date" className='inputcss'/>
  </Form.Group>
  <br/><br/><br/>

  
  <Button variant="primary" type="submit" className='submitcss'>
    Submit
  </Button>
</Form>
</>
    );
}

export default AddAppoinment;