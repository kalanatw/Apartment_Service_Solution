import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Addingform() {

const[ResidentID, setResidentID] = useState('');
const[ResidentName, setResidentName] = useState('');

const senddata = async() => {
console.log(ResidentID)
console.log(ResidentName)
var axios = require('axios');
var data = {
RID : ResidentID,
RName : ResidentName
}
await axios.post('http://localhost:8070/login',data)
.then((res)=>{
console.log(res);
}).catch((err)=>{
console.log(err);
});
}
return (

<form action="/BillAdding">
      <table>
        <tr>
          <td>
            <label 
              className='lablecss'>Resident ID:    
            </label>
            <input type="text" 
                   name='ResidentID' 
                   className='inputcss'
                   required
                   onChange={(e) => {setResidentID(e.target.value)}}
                            />
          </td>

          <td>
            <label 
              className='lablecss'>Resident Name:    
            </label>
            <input type="text" 
                   name='ResidentName' 
                   className='inputcss'
                   required="required"
                   onChange={(e) => {setResidentName(e.target.value)}}
                            />

          </td>
        </tr>
      </table><br/>
      <Link to="/BillAdding">
        <button onClick={senddata} value="submit" type="submit" className='submitcss'>Submit</button>
      </Link>
</form>
)
}
export default Addingform