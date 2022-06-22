//import React,{Component} from 'react';
//import { useState } from "react";
//import ReactDOM from "react-dom/client";
//import TopBar from '../Shared/topbar';
//import Sidebar from '../Shared/sidebar';

/*function MyForm() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }
  
return (
<main>
  <div>
    <TopBar/>
  </div>
  <div className ="App">
    <Sidebar />
  </div>
  <div className ="inline">
    <div className='bodycss'>
      <h2>Add Bill Amount</h2><br/>
      <div className='formbody'>
        <form onSubmit={handleSubmit}>
        <label className='lablecss'>
          Resident ID                   
        </label> 
        = <input 
          type="text" 
          name="ResidentID" 
          value={inputs.ResidentID || ""} 
          onChange={handleChange}
          className='inputcss'
        />
        <br/><br/>
        
        <label className='lablecss'>
          Resident Name             
        </label> 
        = <input 
            type="text" 
            name="Name" 
            value={inputs.Name || ""} 
            onChange={handleChange}
            className='inputcss'
        />
        <br/><br/>

        <label className='lablecss'>
          Enter Bill Amount         
        </label>  
        = <input 
            type="text" 
            name='billamount'
            value={inputs.billamount || ""} 
            onChange={handleChange}
            className='inputcss'

        />
        <br/><br/>

        <label className='lablecss'>
          Enter Bill Month           
        </label>
        = <input 
            type="text" 
            name='month' 
            value={inputs.month || ""} 
            onChange={handleChange}
            className='inputcss'
        />
        <br/><br/>

        <label className='lablecss'>
          Enter Bill Type                   
        </label>
        = <input 
            type="text" 
            name='type' 
            value={inputs.type || ""} 
            onChange={handleChange}
            className='inputcss'
        />
        <br/><br/>

        <label className='lablecss'>
          Enter Bill ID                       
        </label>
        = <input 
            type="text" 
            name='billID' 
            value={inputs.billID || ""} 
            onChange={handleChange}
            className='inputcss'
        />
        <br/><br/><br/>
          <input 
            type="submit" 
            className='submitcss'
        />
        </form>
      </div>
    </div>
  </div>
</main>
    );
  }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
export default  MyForm();*/



import {React,useState,useEffect} from "react";
import './formtest2.css'; 
import {Form,Button} from "react-bootstrap";
//import {Routes, Route, useNavigate} from 'react-router-dom';
import {addBill} from "../../../utils/UtilityBillAdding"


function AddBill(){

  const [ResidentID,setResidentID]= useState("")
  const [Name,setName]= useState("")
  const [billAmount,setbillAmount]= useState(0)
  const [month,setmonth]= useState("")
  const [billtype,setbilltype]= useState("")
  const [billID,setbillID]= useState(0)
  const [formError,setFormError]= useState({})
  const [isSubmit,setIsSubmit]= useState(false)


  const submitBILL = async (event) =>{
    event.preventDefault();
    setFormError(validate({resident_id:ResidentID,resident_name:Name,bill_amount:billAmount,month,type:billtype,bill_id:billID}))
    setIsSubmit(true);
  //console.log(typeof(billtype));
  //const type=this.state.EnterBillType;
  const Resident_ID = this.state.resident_id;
  const Resident_Name = this.state.resident_name;
    
   
    console.log(Resident_ID,Resident_Name);
    

    /*console.log(type);*/

   
  }

  useEffect(()=>{
    console.log(Object.keys(formError).length)
    console.log(isSubmit)
    const addData = async ()=>{
      const res = await addBill({resident_id:ResidentID,resident_name:Name,bill_amount:billAmount,month,type:billtype,bill_id:billID})
      console.log(res)
    }
    if(Object.keys(formError).length===0 && isSubmit){
      addData()
    }
  },[isSubmit,formError])

  const validate = (values)=>{
    const error = {};
    if(!values.resident_id){
      error.resident_id = "Resident ID is required!"
    }
    if(!values.resident_name){
      error.resident_name = "Resident Name is required!"
    }
    if(values.bill_amount==0){
      error.bill_amount ="Amount Need to be Greater than Zero"
    }
    if(!values.bill_amount){
        error.bill_amount = "Bill Amount is required!"
      }
   
    if(!values.month){
      error.month = "Bill Month is required!"
    }

    if(!(values.type === 'Electricity' || values.type === 'Water' || values.type === 'electricity' || values.type === 'water')){
    error.type = "Bill Type need to be Electricity or Water"
    }
    if(!values.type){
      error.type = "Bill Type is required!"
    }
    if(!values.bill_id){
      error.bill_id = "Bill Type is required!"
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
            <form onSubmit={submitBILL}>
{/*className="mb-3" */}
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lablecss">Resident ID </Form.Label>
                  = <Form.Control type="text" name="ResidentID " className='inputcss' onChange={(e)=>setResidentID(e.target.value)}/>
                    <p className="onlyerror">{formError.resident_id}</p>
                </Form.Group>
                <br/><br/>
        
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lablecss">Resident Name </Form.Label>
                  = <Form.Control type="text" name="Name" className='inputcss' onChange={(e)=>setName(e.target.value)}/>
                    <p className="onlyerror">{formError.resident_name}</p>
                </Form.Group>
                <br/><br/>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lablecss">Enter Bill Amount</Form.Label>
                  = <Form.Control type="number" name="billAmount" className='inputcss' onChange={(e)=>setbillAmount(e.target.value)}/>
                  <p className="onlyerror">{formError.bill_amount}</p>
                </Form.Group>
                <br/><br/>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lablecss">Enter Bill Month</Form.Label>
                  = <Form.Control type="text" name="month" className='inputcss' onChange={(e)=>setmonth(e.target.value)}/>
                  <p className="onlyerror">{formError.month}</p>
                </Form.Group>
                <br/><br/>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lablecss">Enter Bill Type</Form.Label>
                 = <Form.Control type="text" name="billtype" className='inputcss' onChange={(e)=>setbilltype(e.target.value)}/>
                  <p className="onlyerror">{formError.type}</p>
                </Form.Group>
                <br/><br/>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lablecss">Enter Bill ID</Form.Label>
                  = <Form.Control type="text" name="billID" className='inputcss' onChange={(e)=>setbillID(e.target.value)}/>
                    <p className="onlyerror">{formError.bill_id}</p>
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

export default AddBill;