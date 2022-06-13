import React from 'react';
import './viewlecbill.css'; 

class elecbillview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ResidentID: '',
      month:'',
      
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
      <form onSubmit={this.handleSubmit}>
        
        <label className='lablecss'>
          Resident ID                   
        </label> 
        = <input type="text" name='ResidentID' onChange={this.handleChange} className='inputcss'/>
        <br/><br/>
        
      
        <label className='lablecss'>
          Enter Bill Month           
        </label>
        = <input type="date" name='month' onChange={this.handleChange} className='inputcss' />
        <br/><br/>

        
        <br/><br/>

        <input type="submit" value="Submit" className='submitcss'/>

        
      </form>
    );
  }
}

export default elecbillview;

/*import React from 'react';
import { useState } from "react";
import ReactDOM from "react-dom/client";
import './viewelec.css'; 

function ViewLec() {
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
        Enter Bill Month             
        </label>
        =  <input 
          type="text" 
          name="month" 
          value={inputs.Name || ""} 
          onChange={handleChange}
          className='inputcss'
      />
      <br/><br/>

      <input 
          type="submit" 
          value="submit"
          className='submitcss'
      />
      </form>
    
</main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ViewLec />);
export default  ViewLec(); */