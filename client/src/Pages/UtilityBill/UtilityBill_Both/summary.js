import axios from "axios";
import { React, useState, useEffect } from "react";
//import { Table } from "react-bootstrap";
import './summary.css';
import { Link } from 'react-router-dom';

const subhead = {
  color: "#096857",
  fontSize: "20px",
  fontWeight: "bold",
};


const Summary = ()=>{
  const [data,setData]=useState([]);
  const [bill_summary,setSummary]=useState([]);
  const [type,setType]=useState("");

  const[date,setDate] = useState("")
  

  
 

  useEffect(()=>{
    axios.get("/utilityBill")
    .then((response)=>{
      // console.log(response);
     setData(response.data.data);
     setSummary(response.data.data);
      
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
    if(date!=""){
      li=li.filter((d)=>{
        const dt=new Date(date);
        const d1=new Date(d.month);
       return dt.getMonth()==d1.getMonth() && dt.getFullYear()==d1.getFullYear();
       })
    }

    setSummary(li);
  }

  const FilterDataByDate=(val)=>{
    let li=data;
    if(val!=""){
      li=li.filter((d)=>{
        const dt=new Date(val);
        const d1=new Date(d.month);
       return dt.getMonth()==d1.getMonth() && dt.getFullYear()==d1.getFullYear();
       })
     
    }
    if(type!=""){
      li=li.filter((d)=>{
        return d.type==type;
       })
    }

    setSummary(li);
  }

  // const filtered = !search? bill_summary:bill_summary.filter((bill_summary)=>{
  //   return (bill_summary.type == searchOne.toLowerCase())&&(bill_summary.month == searchTwo.toLowerCase())
  // });
  return(
    <div className="summarycss">
      <Link to="/SummaryByResident">
              <button variant="primary" type="submit" className='historybutton'>View Histroy by Bill ID</button>
      </Link>
      <h2 style={subhead}>View Bill History</h2><br/>
      <div>
   
        <form>

          <label className='lablecss'>
            Enter Bill Month
          </label>
          = <input type="date" value={date} onChange={(e)=>{setDate(e.target.value);
          FilterDataByDate(e.target.value);}} className='inputcss' required="required" />
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
          bill_summary.map((bill_summary)=>{
          return( 
            <tr key={bill_summary.id}>
              <td>{bill_summary.resident_id}</td>
              <td>{bill_summary.resident_name}</td>
              <td>{bill_summary.bill_id}</td>
              <td>{bill_summary.bill_amount}</td>
              <td>{bill_summary.paid_amount}</td>
              <td>{bill_summary.type}</td>
              <td>{bill_summary.month}</td>
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

/*import axios from "axios";
import { React, useState, useEffect } from "react";
//import { Table } from "react-bootstrap";
import './summary.css';

const subhead = {
  color: "#096857",
  fontSize: "20px",
  fontWeight: "bold",
};


function Summary() {
  const [bill_summary,setSummary]=useState([]);

  const[searchOne,setSearchOne] = useState("")
  const[searchTwo,setSearchTwo] =useState("")

  const handleChangeOne = (e) =>{
    setSearchOne(e.target.value);
  }
  const handleChangTwo = (e) =>{
    setSearchTwo(e.target.value); 
  }


  useEffect(()=>{
    console.log("called")
    axios.get("/utilityBill")
    .then((res)=>{
      console.log(res.data.data)
      setSummary({billInfo:res.data.data});
      
    })
    .catch((error)=>{
      console.log(error);
    
    })
  },[])
 

  const filtered = !search? bill_summary:bill_summary.filter((bill_summary)=>{
    return (bill_summary.type == searchOne.toLowerCase())&&(bill_summary.month == searchTwo.toLowerCase())
  });
  return(
    <div className="summarycss">
      <h2 style={subhead}>View Bill History</h2><br/>
      <div>
   
        <form>

          <label className='lablecss'>
            Enter Bill Month
          </label>
          = <input type="text" value={searchOne} onChange={handleChangeOne} className='inputcss' required="required" />
          <br /><br />

          <label className='lablecss'>
            Enter Bill Type
          </label>
          = <input type="text"  value={searchTwo} onChange={handleChangTwo} className='inputcss' required="required" />
          <br /><br />


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
      </thead>
      <tbody>
        {
          filtered?filter.map((bill_summary)=>{
          return( 
            <tr key={bill_summary.id}>
              <td>{bill_summary.resident_id}</td>
              <td>{bill_summary.resident_name}</td>
              <td>{bill_summary.bill_id}</td>
              <td>{bill_summary.bill_amount}</td>
              <td>{bill_summary.paid_amount}</td>
            </tr>
                )
          }
          ):null
        }
            
      </tbody>
      </table>
    </div>
  );
}
export default Summary;*/
  

  