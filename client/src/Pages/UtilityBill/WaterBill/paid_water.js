import React from 'react';
import './viewbill_water.css'; 

class paid_water extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ResidentID: '',
      amount:'',
      
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
      <form onSubmit={this.handleSubmit} className='formbody'>
        
        <label className='lablecss'>
          Resident ID                   
        </label> 
        = <input type="text" name='ResidentID' onChange={this.handleChange} className='inputcss' required="required"/>
        <br/><br/>
        
      
        <label className='lablecss'>
          Enter Paid Amount           
        </label>
        = <input type="number" name='amount' onChange={this.handleChange} className='inputcss' required="required" />
        <br/><br/>

        
        <br/><br/>

        <input type="submit" value="Submit" className='submitcss'/>

        
      </form>
    );
  }
}

export default paid_water;