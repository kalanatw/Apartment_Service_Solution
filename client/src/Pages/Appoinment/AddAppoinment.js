import {React,useState,useEffect} from "react";
import {Form,Button,Modal} from "react-bootstrap";
import {Routes, Route, useNavigate,Link} from 'react-router-dom';
// import './appoinment.css'; 
import {addAppoinment} from "../../utils/appoinment"
// import '../../App.css'
import {SuccessAppoinment} from "./SuccessAppoinment"
import MyModal from "../../components/modal/MyModal";


function AddAppoinment(){

  const [name,setName]= useState("")
  const [numOfGuest,setnumOfGuest]= useState(0)
  const [NIC,setNIC]= useState("")
  const [date,setdate]= useState("")
  const [mobileNo,setmobileNo]= useState("")
  const [expDate,setexpDate]= useState("")
  const [formError,setFormError]= useState({})
  const [isSubmit,setIsSubmit]= useState(false)
  const [number,setNumber] =useState(0)
  // const [modalShow, setModalShow] = useState(false);

  

  


  const submitAppoinment = async (event) =>{
    event.preventDefault();
    // console.log({appointmentName:name,numOfGuest,appointmentNIC:NIC,appointmentDate:date,mobileNumber:mobileNo,expireDate:expDate})
    // const err = validate({appointmentName:name,numOfGuest,appointmentNIC:NIC,appointmentDate:date,mobileNumber:mobileNo,expireDate:expDate})
    setFormError(validate({appointmentName:name,numOfGuest,appointmentNIC:NIC,appointmentDate:date,mobileNumber:mobileNo,expireDate:expDate}))
    setNumber(Math.floor(1000 + Math.random() * 9000))
    setIsSubmit(true)
    
    
    
  }
  

  useEffect(()=>{
    console.log(Object.keys(formError).length)
    console.log(isSubmit)
    const addData = async ()=>{
     

      const res = await addAppoinment({appointmentName:name,numOfGuest,appointmentNIC:NIC,appointmentDate:date,mobileNumber:mobileNo,expireDate:expDate,otp:number})
      console.log(res)
      // navigateToOtp()
      

    }
    if(Object.keys(formError).length===0 && isSubmit){
      addData()
      
      // setModalShow(true)
    }
  },[isSubmit,formError])

  const validate = (values)=>{
    const error = {};
    if(!values.appointmentName){
      error.appointmentName = "Appointment Name is required!"
    }
    if(!values.numOfGuest){
      error.numOfGuest = "Number of guest is required!"
    }else if(values.numOfGuest<1){
      error.numOfGuest = "should be > 0"
    }
    if(!values.appointmentNIC){
      error.appointmentNIC = "NIC is required!"
    }else if(values.appointmentNIC.length>12){
      error.appointmentNIC = "NIC cannot have more than 12 numbers!"
    }
    if(!values.appointmentDate){
      error.appointmentDate = "Appointment Date is required!"
    }
    if(!values.mobileNumber){
      error.mobileNumber = "Mobile number is required!"
    }
    if(!values.expireDate){
      error.expireDate = "Appointment expire date is required!"
    }else if(values.appointmentDate>values.expireDate){
      error.expireDate = "qqqqqqqqqqqq"
    }
    return error;

  }

  
  const navigate = useNavigate();

  const navigateToOtp = () => {
    // 👇️ navigate to /contacts
    navigate('/AppoinmentTable');
  };

    return(
<>
<div className="inline">

<h2>Add Appoinment</h2><br/>
<div className="bodycss">
<div className="formbody">
<Form  onSubmit={submitAppoinment}>

<br/>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="lablecss">Name</Form.Label>
    <Form.Control type="text" name="name" placeholder="Name of the guest" className='inputcss' onChange={(e)=>setName(e.target.value)}/>
    <p>{formError.appointmentName}</p>
  </Form.Group>
  <br/><br/>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="lablecss">No of Guests </Form.Label>
    <Form.Control type="number" name="noOfGuests" placeholder="How many visitors" className='inputcss' onChange={(e)=>setnumOfGuest(e.target.value)}/>
    <p>{formError.numOfGuest}</p>
  </Form.Group>
  <br/><br/>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="lablecss">NIC </Form.Label>
    <Form.Control type="text" name="nic" placeholder="NIC" className='inputcss' onChange={(e)=>setNIC(e.target.value)}/>
    <p>{formError.appointmentNIC}</p>
  </Form.Group>
  <br/><br/>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="lablecss">Start Date</Form.Label>
    <Form.Control type="date" name="dateV" placeholder="Date of visiting" className='inputcss' onChange={(e)=>setdate(e.target.value)}/>
    <p>{formError.appointmentDate}</p>
  </Form.Group>
  <br/><br/>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="lablecss">Mobile No</Form.Label>
    <Form.Control type="text" name="mobile" placeholder="Mobile number" className='inputcss' onChange={(e)=>setmobileNo(e.target.value)}/>
    <p>{formError.mobileNumber}</p>
  </Form.Group>
  <br/><br/>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="lablecss">End Date</Form.Label>
    <Form.Control type="date" name="dateE" placeholder="Departure date" className='inputcss' onChange={(e)=>setexpDate(e.target.value)}/>
    <p>{formError.expireDate}</p>
  </Form.Group>
  <br/><br/><br/>
  <Button  variant="primary" type="submit" className='submitcss'  >
  {/* <Link to="./SuccessAppoinment"></Link> */}
    Submit
  </Button>
  {number==0?<></>:<Link className='submitcss' to={{pathname:"/otp/"+number}}>Show OTP</Link>}
  
  

  
  
</Form>



{/* <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
</div>
</div>
</div>
</>
    );
}

export default AddAppoinment;