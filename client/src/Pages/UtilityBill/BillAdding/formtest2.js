import React,{Component} from 'react';
import './formtest2.css'; 
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

class FormAddBill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ResidentID: '',
      Name:'',
      billamount:'',
      month:'',
      type:'',
      billID:''
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
  render () {
  return (
    <main>
      <div className ="inline">
        <h2>Add Bill Amount</h2><br/>
        <div className='bodycss'>
          <div className='formbody'>
            <form onSubmit={this.handleSubmit}>
        
                <label className='lablecss'>
                Resident ID                   
                </label> 
                = <input type="text" name='ResidentID' onChange={this.handleChange} className='inputcss'required/>
                <br/><br/>
        
                <label className='lablecss'>
                Resident Name             
                </label> 
                = <input type="text" name='Name' onChange={this.handleChange} className='inputcss' required/>
                <br/><br/>

                <label className='lablecss'>
                Enter Bill Amount         
                </label>  
                = <input type="number" name='billamount' onChange={this.handleChange} className='inputcss' required/>
                <br/><br/>

                <label className='lablecss'>
                Enter Bill Month           
                </label>
                = <input type="date" name='month' onChange={this.handleChange} className='inputcss' required/>
                <br/><br/>

                <label className='lablecss'>
                Enter Bill Type                   
                </label>
                = <input type="text" name='type' onChange={this.handleChange} className='inputcss' required/>
                <br/><br/>

                <label className='lablecss'>
                Enter Bill ID                       
                </label>
                = <input type="text" name='billID' onChange={this.handleChange} className='inputcss' required/>
        
                <br/><br/><br/>

                <input type="submit" value="Submit" className='submitcss'/>

        
            </form>
          </div>
        </div>
      </div>
    </main>
  );
  }
}

export default FormAddBill;



