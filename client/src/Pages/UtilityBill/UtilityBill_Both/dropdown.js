import { React,useState} from 'react';
import { Link } from 'react-router-dom';
//import {Form,Button} from "react-bootstrap";
import './dropdown.css'; 


function Addingform() {

/*const[ResidentID, setResidentID] = useState("");
const[ResidentName, setResidentName] = useState("");*/
const [isSubmit,setIsSubmit]= useState(false)

const senddata = 
(event) => {
    event.preventDefault();
    setIsSubmit(true);
    /*const ResidentID=this.state.ResidentID;
    const ResidentName=this.state.ResidentName;*/
    //console.log(ResidentID,ResidentName);
}


return (
<>
<form>
      {/*<table>
        <tr>
          <td>
            <label 
              className='lablecss'>Resident ID:    
            </label>
            <input type="text" 
                   name="ResidentID"
                   className='inputcss'
                   onChange={(e) => setResidentID(e.target.value)}
                   
            />
          </td>

          <td>
            <label 
              className='lablecss'>Resident Name:    
            </label>
            <input type="text" 
                   name="ResidentName"
                   className='inputcss'
                   onChange={(e) => setResidentName(e.target.value)}
            />
          </td>
        </tr>
</table><br/>*/}
      <Link to="/BillAdding">
        <button variant="primary" type="submit" className='buttoncss'>Click Here to Add Bill</button>
      </Link>
</form>
</>
)
}
export default Addingform;