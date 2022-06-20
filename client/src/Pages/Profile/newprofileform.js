import React from 'react';
import './newprofileform.css'; 
import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
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
      <form onSubmit={handleSubmit}>
        <label className='lablecss'>
          Resident ID                   
          
        </label> 
        =<input 
          type="text" 
          name="ResidentID" 
          value={inputs.ResidentID || ""} 
          onChange={handleChange}
        />
        <br/><br/>
        
        <label className='lablecss'>
          Resident Name             
        </label> 
        =<input 
            type="text" 
            name="Name" 
            value={inputs.Name || ""} 
            onChange={handleChange}
        />
        <br/><br/>

        <label className='lablecss'>
          Enter Bill Amount         
        </label>  
        =<input 
            type="text" 
            name='billamount'
            value={inputs.billamount || ""} 
            onChange={handleChange}

        />
        <br/><br/>

        <label className='lablecss'>
          Enter Bill Month           
        </label>
        =<input 
            type="text" 
            name='month' 
            value={inputs.month || ""} 
            onChange={handleChange}
        
        />
        <br/><br/>

        <label className='lablecss'>
          Enter Bill Type                   
        </label>
        =<input 
            type="text" 
            name='type' 
            value={inputs.type || ""} 
            onChange={handleChange}
        />
        <br/><br/>

        <label className='lablecss'>
          Enter Bill ID                       
        </label>
        =<input 
            type="text" 
            name='billID' 
            value={inputs.billID || ""} 
            onChange={handleChange}
        />
        
          <input 
            type="submit" 
            className='submitcss'
        />
      </form>
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<MyForm />);
  
  export default MyForm