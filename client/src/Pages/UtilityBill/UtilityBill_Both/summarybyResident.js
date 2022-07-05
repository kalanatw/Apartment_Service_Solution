
import axios from "axios";
import { React, useState, useEffect } from "react";
import './summary.css';

const subhead = {
  color: "#096857",
  fontSize: "20px",
  fontWeight: "bold",
};


const Summary = ()=>{
  const [data,setData]=useState([]);
  const [bill_summarybyresident,setSummarybyresident]=useState([]);
  const [type,setType]=useState("");
  const [bill_id,setBillID]=useState("");
  //const[date,setDate] = useState("")
  

  
 

  useEffect(()=>{
    axios.get("/utilityBill")
    .then((response)=>{
      // console.log(response);
     setData(response.data.data);
     setSummarybyresident(response.data.data);
      
    })
    .catch((error)=>{
      console.log(error);
    
    })
  },[""]);


  const FilterDataByType=(val)=>{
    let li=data;
    if(val!=""){
     li=data.filter((d)=>{
      return d.type==val;
     })
    }
    if(bill_id!=""){
      li=li.filter((d)=>{
        return d.bill_id==bill_id;
       })
    }

    setSummarybyresident(li);
  }

  const FilterDataByBillID=(val)=>{
    let li=data;
    if(val!=""){
      li=li.filter((d)=>{
        return d.bill_id==val;
       })
     
    }
    if(type!=""){
      li=li.filter((d)=>{
        return d.type==type;
       })
    }

    setSummarybyresident(li);
  }

  return(
    <div className="summarycss">
      <h2 style={subhead}>View Bill History By Bill ID</h2><br/>
      <div>
   
        <form>

          <label className='lablecss'>
            Enter Bill ID
          </label>
          = <input type="text" value={bill_id} onChange={(e)=>{setBillID(e.target.value);
          FilterDataByBillID(e.target.value);}} className='inputcss' required="required" />
          <br /><br />

          <label className='lablecss'>
                Enter Bill Type
              </label>
              = <select
                  className="selectcss"
                  id="type"
                  name="type"
                  placeholder="Select type"
                  value={type}
                  onChange={(e)=>{
                    setType(e.target.value);
                    FilterDataByType(e.target.value);
                  }}
                 
                >
                  <option value="" selected>--Select Type--</option>
                  <option value="ELECTRICITY">Electricity</option>
                  <option value="WATER">Water</option>
                </select>


        </form>
        <br/><br/>
      </div>
      <table className="summarytable">
      <thead>
        <th>Resident ID</th>
        <th>Resident Name</th>
        <th>Bill A/C Number</th>
        <th>Bill Amount</th>
        <th>Paid Amount</th>
        <th>Type</th>
        <th>Month</th>
      </thead>
      <tbody>
        {
          bill_summarybyresident.map((bill_summarybyresident)=>{
          return( 
            <tr key={bill_summarybyresident.id}>
              <td>{bill_summarybyresident.resident_id}</td>
              <td>{bill_summarybyresident.resident_name}</td>
              <td>{bill_summarybyresident.bill_id}</td>
              <td>{bill_summarybyresident.bill_amount}</td>
              <td>{bill_summarybyresident.paid_amount}</td>
              <td>{bill_summarybyresident.type}</td>
              <td>{bill_summarybyresident.month}</td>
            </tr>
                )
          
        })

      }
            
      </tbody>
      </table>
    </div>
  );
}
export default Summary;

