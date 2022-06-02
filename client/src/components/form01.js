import React from 'react';
import './form01.css'; 

class AddAppoimentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
      <h2>Add Appoinment</h2><br/>

      <form onSubmit={this.handleSubmit}>
        
        <label className='lablecss'>
          Name                 
        </label> 
        = <input type="text" value={this.state.value} onChange={this.handleChange} className='inputcss'/>
        <br/><br/>
        
        <label className='lablecss'>
          No of Guests             
        </label> 
        = <input type="text" value={this.state.value} onChange={this.handleChange} className='inputcss' />
        <br/><br/>

        <label className='lablecss'>
          NIC        
        </label>  
        = <input type="text" value={this.state.value} onChange={this.handleChange} className='inputcss' />
        <br/><br/>

        <label className='lablecss'>
          Date          
        </label>
        = <input type="datetime" value={this.state.value} onChange={this.handleChange} className='inputcss' />
        <br/><br/>

        <label className='lablecss'>
          Mobile No                 
        </label>
        = <input type="text" value={this.state.value} onChange={this.handleChange} className='inputcss'/>
        <br/><br/>

        <label className='lablecss'>
          Expiration Date                     
        </label>
        = <input type="datetime" value={this.state.value} onChange={this.handleChange} className='inputcss'/>
        
        <br/><br/><br/>

        <input type="submit" value="Submit" className='submitcss'/>

        
      </form>
      </>
    );
  }
}

export default AddAppoimentForm;