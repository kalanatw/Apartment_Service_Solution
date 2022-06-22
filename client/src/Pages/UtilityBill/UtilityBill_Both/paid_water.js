import React from 'react';
import './viewbill_water.css'; 
{/*class paid_water extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ResidentID: '',
      amount:'',
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
    

  handleSubmit(event) {
    alert('Form was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='formbody'>
        
        <label className='lablecss'>
          Resident ID                   
        </label> 
        = <input type="text" name='ResidentID' onChange={this.handleChange} className='inputcss' required="required"/>
        <br/><br/>
        
      
        <label className='lablecss'>
          Enter Paid Amount           
        </label>
        = <input type="number" name='amount' onChange={this.handleChange} className='inputcss' required="required" />
        <br/><br/>

        
        <br/><br/>

        <input type="submit" value="Submit" className='submitcss'/>

        
      </form>
    );
  }
}

export default paid_water;*/}

class paid_water extends React.Component {
  state={
    value:'',
    ResidentID:'',
    amount:'',
    billType:''
  };

  handleChange = (event) => {
    const name= event.target.name;
    const value= event.target.value;

    this.setState({[name]:value});
    
  }

  handlesubmit=(event) => {
    event.preventDefault();
    const ResidentID=this.state.ResidentID;
    const amount=this.state.amount;
    const billType=this.state.billType;
    console.log(ResidentID,amount,billType);

  }
render() {
    return (
      <form>
        
        <label className='lablecss'>
          Resident ID                   
        </label> 
        = <input type="text" name='ResidentID' onChange={this.handleChange} className='inputcss' required="required"/>
        <br/><br/>
        
      
        <label className='lablecss'>
          Enter Paid Amount           
        </label>
        = <input type="number" name='amount' onChange={this.handleChange} className='inputcss' required="required" />
        <br/><br/>

        <label className='lablecss'>
          Enter Bill Type          
        </label>
        = <input type="text" name='billType' onChange={this.handleChange} className='inputcss' required="required" />
        <br/><br/>

        <button onClick={this.handlesubmit} className='submitcss'>Submit</button>

        
      </form>
    );
  }
}

export default paid_water;

/*
import {React,useState,useEffect} from "react";
import './formtest2.css'; 
import {Form,Button} from "react-bootstrap";
//import {Routes, Route, useNavigate} from 'react-router-dom';
import {addPaidAmount} from "../../../utils/paidamount"


function AddPaidAmount(){

  const [ResidentID,setResidentID]= useState("")
  const [PaidAmount,setPaidAmount]= useState(0)
  const [BillType, setBillType]= useState("")
  const [formError,setFormError]= useState({})
  const [isSubmit,setIsSubmit]= useState(false)


  const submitBILL = async (event) =>{
    event.preventDefault();
    setFormError(validate({ResidentID,}))
    setIsSubmit(true);
   // console.log(typeof(billtype));
    //const type=this.state.EnterBillType;
    

    /*console.log(type);*/
//}

  /*useEffect(()=>{
    console.log(Object.keys(formError).length)
    console.log(isSubmit)
    const addData = async ()=>{
      const res = await addBill({ResidentID, })
      console.log(res)
    }
    if(Object.keys(formError).length===0 && isSubmit){
      addData()
    }
  },[isSubmit,formError])

  const validate = (values)=>{
    const error = {};
    if(!values.ResidentID){
      error.ResidentID = "Resident ID is required!"
    }
    if(!values.ResidentName){
      error.ResidentName = "Resident Name is required!"
    }
    if(values.EnterBillAmount==0){
      error.EnterBillAmount ="Amount Need to be Greater than Zero"
    }
    if(!values.EnterBillAmount){
        error.EnterBillAmount = "Bill Amount is required!"
      }
   
    if(!values.EnterBillMonth){
      error.EnterBillMonth = "Bill Month is required!"
    }

    if(!(values.EnterBillType === 'Electricity' || values.EnterBillType === 'Water' || values.EnterBillType === 'electricity' || values.EnterBillType === 'water')){
    error.EnterBillType = "Bill Type need to be Electricity or Water"
    }
    if(!values.EnterBillType){
      error.EnterBillType = "Bill Type is required!"
    }
    if(!values.EnterBillID){
      error.EnterBillID = "Bill Type is required!"
    }
    return error;

  }

return(
<>
<main>
      <div className ="inline">
        <h2>Add Bill Amount</h2><br/>
        <div className='bodycss'>
          <div className='formbody'>
            <form onSubmit={submitBILL}>*/
{/*className="mb-3" */}
               /* <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lablecss">Resident ID </Form.Label>
                  = <Form.Control type="text" name="ResidentID " className='inputcss' onChange={(e)=>setResidentID(e.target.value)}/>
                    <p className="onlyerror">{formError.ResidentID}</p>
                </Form.Group>
                <br/><br/>
        
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lablecss">Resident Name </Form.Label>
                  = <Form.Control type="text" name="Name" className='inputcss' onChange={(e)=>setName(e.target.value)}/>
                    <p className="onlyerror">{formError.ResidentName}</p>
                </Form.Group>
                <br/><br/>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lablecss">Enter Bill Amount</Form.Label>
                  = <Form.Control type="number" name="billAmount" className='inputcss' onChange={(e)=>setbillAmount(e.target.value)}/>
                  <p className="onlyerror">{formError.EnterBillAmount}</p>
                </Form.Group>
                <br/><br/>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lablecss">Enter Bill Month</Form.Label>
                  = <Form.Control type="date" name="month" className='inputcss' onChange={(e)=>setmonth(e.target.value)}/>
                  <p className="onlyerror">{formError.EnterBillMonth}</p>
                </Form.Group>
                <br/><br/>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lablecss">Enter Bill Type</Form.Label>
                  = <Form.Control type="text" name="billtype" className='inputcss' onChange={(e)=>setbilltype(e.target.value)}/>
                  <p className="onlyerror">{formError.EnterBillType}</p>
                </Form.Group>
              
                <br/><br/>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lablecss">Enter Bill ID</Form.Label>
                  = <Form.Control type="number" name="billID" className='inputcss' onChange={(e)=>setbillID(e.target.value)}/>
                    <p className="onlyerror">{formError.EnterBillID}</p>
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

export default AddBill;*/


