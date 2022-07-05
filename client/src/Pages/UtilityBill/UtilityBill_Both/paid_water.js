import axios from 'axios';
import React from 'react';
import './viewbill_water.css';

class PaidWater extends React.Component {
  state = {
    resident_id: '',
    paid_amount: 0,
    type: '',
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handlesubmit = (event) => {
    event.preventDefault();
    const resident_id = this.state.resident_id;
    const paid_amount = this.state.paid_amount;
    const type = this.state.type;
    console.log(resident_id, paid_amount, type);
    axios.post("utilityBill/addPaidAmount", {
      resident_id: resident_id,
      paid_amount: parseFloat(paid_amount),
      type: type
    })
      .then((res) => {
        if (res.data.success) {
          this.setState({ resident_id : '', paid_amount : 0, type : 0 });
          alert(res.data.message)
        } else {
          alert(res.data.message)
        }
      })
      .catch((error) => {
       window.location = "/";
      });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <form className='formbody'>
              <label className='lablecss'>
                Resident ID
              </label>
              = <input type="text" name='resident_id' value={this.state.resident_id} onChange={this.handleChange} className='inputcss' required="required" />
              <br /><br />


              <label className='lablecss'>
                Enter Paid Amount
              </label>
              = <input type="number" name='paid_amount' value={this.state.paid_amount} onChange={this.handleChange} className='inputcss' required="required" />
              <br /><br />

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
                <br /><br />
              <button onClick={this.handlesubmit} className='submitcss'>Submit</button>
              <br /><br />
              
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PaidWater;
