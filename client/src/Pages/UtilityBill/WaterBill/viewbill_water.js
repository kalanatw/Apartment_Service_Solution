import React from 'react';
import './viewbill_water.css'; 

class waterbillview extends React.Component {
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
        = <input type="text" name='ResidentID' onChange={this.handleChange} className='inputcss' required="required"/>
        <br/><br/>
        
      
        <label className='lablecss'>
          Enter Bill Month           
        </label>
        = <input type="date" name='month' onChange={this.handleChange} className='inputcss' required="required"/>
        <br/><br/>

        
        <br/><br/>

        <input type="submit" value="Submit" className='submitcss'/>

        
      </form>
    );
  }
}

export default waterbillview;