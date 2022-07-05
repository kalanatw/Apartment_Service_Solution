import axios from 'axios';
import React from 'react';
import './formtest2.css'; 


class waterbillview extends React.Component {
  state = {
    resident_id: '',
    resident_name: '',
    bill_amount: 0,
    month: '',
    type: '',
    bill_id: '',
  };

 handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

handlesubmit = (event) => {
    event.preventDefault();
    const resident_id = this.state.resident_id;
    const resident_name = this.state.resident_name;
    const month = this.state.month;
    const type = this.state.type;
    const bill_id = this.state.bill_id;
    const bill_amount = this.state.bill_amount;
    console.log(resident_id, resident_name, month,type,bill_id,bill_amount);

    axios.post("utilityBill/create", {
      resident_id: resident_id,
      resident_name: resident_name,
      month: month,
      type: type,
      bill_id: bill_id,
      bill_amount: bill_amount
    })
      .then((res) => {
        if (res.data.success) {
          this.setState({ resident_id : '',resident_name: '',bill_amount: 0, month : '', type : '',bill_id: ''});
          alert(res.data.data.message)
          
        } else {
          alert(res.data.message)
        }
      })
      .catch((error) => {
       window.location = "/";
      });
  }

render() {
return(
<main>
      <div className ="inline">
        <h2>Add Bill Amount</h2><br/>
        <div className='bodycss'>
          <div className='formbody'>
            <form>

              <label className='lablecss'>
                Resident ID
              </label>
              = <input type="text" name='resident_id' value={this.state.resident_id} onChange={this.handleChange} className='inputcss'/>
              <br /><br /><br/>
        
             <label className='lablecss'>
                Resident Name
              </label>
              = <input type="text" name='resident_name' value={this.state.resident_name} onChange={this.handleChange} className='inputcss'/>
              <br /><br /><br/>

              <label className='lablecss'>
              Enter Bill Amount
              </label>
              = <input type="number" name='bill_amount' value={this.state.bill_amount} onChange={this.handleChange} className='inputcss'/>
              <br /><br /><br/>

              <label className='lablecss'>
              Enter Bill Month
              </label>
              = <input type="text" name='month' placeholder='yyyy-mm-dd' value={this.state.month} onChange={this.handleChange} className='inputcss'/>
              <br /><br /><br/>

              <label className='lablecss'>
                Enter Bill Type
              </label>
              = <select
                  className="selectcss"
                  id="type"
                  name="type"
                  placeholder="Select type"
                  value={this.state.type}
                  onChange={this.handleChange}
                >
                  <option value="" selected>--Select Type--</option>
                  <option value="ELECTRICITY">Electricity</option>
                  <option value="WATER">Water</option>
                </select>
                <br /><br /><br/>
              
              <label className='lablecss'>
              Enter Bill A/C Number
              </label>
              = <input type="text" name='bill_id'value={this.state.bill_id} onChange={this.handleChange} className='inputcss'/>
              <br /><br /><br/>

              <button onClick={this.handlesubmit} className='submitcss'>Submit</button>
              
            </form>
          </div>
        </div>
      </div>
</main>
);
}
}

export default waterbillview;