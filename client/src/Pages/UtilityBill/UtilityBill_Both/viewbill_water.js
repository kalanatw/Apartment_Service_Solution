import axios from 'axios';
import React from 'react';
import './viewbill_water.css'; 

class waterbillview extends React.Component {
  state={
    value:'',
    ResidentID:'',
    month:'',
    billType:'',
    //searchedData:{},
    //showpopup:false,
  };

  handleChange = (event) => {
    const name= event.target.name;
    const value= event.target.value;

    this.setState({[name]:value});
    
  }

  handlesubmit=(event) => {
    event.preventDefault();
    const ResidentID=this.state.ResidentID;
    const month=this.state.month;
    const billType= this.state.billType;
    console.log(ResidentID,month,billType);
    //axios.post("utilitybill/getUtilityBill",data).then((res)=>{
      //const bill = res.data.bill;
      //this.state({[showpopup]:true})
    //})
  }
render() {
    return (
      <form>
        {/*{this.state.showpopup &&
         <div>
           Popup
        </div>*/}
        <label className='lablecss'>
          Resident ID                   
        </label> 
        = <input type="text" name='ResidentID' onChange={this.handleChange} className='inputcss' required="required"/>
        <br/><br/>
        
      
        <label className='lablecss'>
          Enter Bill Month          
        </label>
        = <input type="text" name='month' onChange={this.handleChange} className='inputcss' required="required" />
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

export default waterbillview;


{/*

function AddBill(){

  const [ResidentID,setResidentID]= useState("")
  const [month,setmonth]= useState("")
  const [billtype,setbilltype]= useState("")
  const [formError,setFormError]= useState({})
  const [isSubmit,setIsSubmit]= useState(false)

  useEffect(()=>{
         console.log("called");
          getAppoinmentDetails();

  },[])

  const getUtilityBill=async () =>{
    await axios
    .get('http://localhost:4000/utilitybill/')
    .then((res) => {
      console.log(res)
      setData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

  }


  useEffect(()=>{
    console.log(Object.keys(formError).length)
    console.log(isSubmit)
    const getUtilityBill = async ()=>{
      const res = await addBill({ResidentID,EnterBillMonth:month,EnterBillType:billtype})
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
   
    if(!values.EnterBillMonth){
      error.EnterBillMonth = "Bill Month is required!"
    }

    if(!(values.EnterBillType === 'Electricity' || values.EnterBillType === 'Water' || values.EnterBillType === 'electricity' || values.EnterBillType === 'water')){
    error.EnterBillType = "Bill Type need to be Electricity or Water"
    }
    if(!values.EnterBillType){
      error.EnterBillType = "Bill Type is required!"
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
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lablecss">Resident ID </Form.Label>
                  = <Form.Control type="text" name="ResidentID " className='inputcss' onChange={(e)=>setResidentID(e.target.value)}/>
                    <p className="onlyerror">{formError.ResidentID}</p>
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

*/}