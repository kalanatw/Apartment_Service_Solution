//import React from 'react';
//import './dropdown2.css';


/*class DropDown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ResidentID: '',
        ResidentName:'',
        
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }

    handleSubmit(event) {
      alert('Form Submitted ');
      event.preventDefault();
    }
    
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <table>
                <tr>
                    <td>
                    <label className='lablecss'>Resident ID:    </label>             
                    <input type="text" 
                            name='ResidentID' 
                            onChange={this.handleChange}
                            value={this.state.ResidentID} 
                            className='inputcss'
                            required="required"
                            />
                    
                    </td>

                    <td>
                    <label> Resident Name:</label>
                    <input type="text" 
                            name='ResidentName' 
                            onChange={this.handleInput} 
                            value={this.state.ResidentName}
                            className='inputcss'
                            required="required"/>
                    
                    </td>
                </tr>
            </table><br/>
          
            <input type="submit" value="Submit" className="submitcss"/>
            
           
        </form>
      );
    }
  }


export default DropDown;*/




/*import ReactDOM from "react-dom/client";
import { useState } from "react";
import React from 'react';
import './dropdown2.css';


function DropDown() {
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
  <form onSubmit={handleSubmit}>
  <table>
    <tr>
        <td>
        <label>
          Resident ID <br/><br/>                
        <input 
          type="text" 
          name="ResidentID" 
          value={inputs.ResidentID || ""} 
          onChange={handleChange}
          className='inputcss'
        />
        </label>
        </td>
        
        <td>
        <label>
          Resident Name   <br/><br/>            
          <input 
            type="text" 
            name="Name" 
            value={inputs.Name || ""} 
            onChange={handleChange}
            className='inputcss'
          />
        </label>
        </td>
      </tr>
    </table>
    <br/>
    <input 
      type="submit" 
      value="Submit"
      className='submitcss'
    />
  </form>
</main>
    );
  }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DropDown />);
export default  DropDown();*/


import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Loginform() {

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
export default Loginform