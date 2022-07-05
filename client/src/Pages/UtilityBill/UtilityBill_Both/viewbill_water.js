import axios from 'axios';
import React from 'react';
import './viewbill_water.css';

class waterbillview extends React.Component {
  state = {
    resident_id: '',
    month: '',
    type: '',
    billInfo: '',
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ billInfo : '' });
    this.setState({ [name]: value });
  }

  handlesubmit = (event) => {
    event.preventDefault();
    const resident_id = this.state.resident_id;
    const month = this.state.month;
    const type = this.state.type;
    console.log(resident_id, month, type);
    axios.post("utilityBill/viewBill", {
      resident_id: resident_id,
      month: month,
      type: type
    })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.data)
          this.setState({ billInfo : res.data.data });
        } else {
          alert(res.data.message)
        }
      })
      .catch((error) => {
       window.location = "/";
      });
  }

  showBillDetails() {
    if (this.state.billInfo && this.state.billInfo._id){
      return (
        <div className='billdetails'>
          <h3>Bill Details</h3>
          <p>Bill A/C Number : {this.state.billInfo.bill_id}</p>
          <p>Bill Amount     : {this.state.billInfo.bill_amount}</p>
          <p>Paid Amount     : {this.state.billInfo.paid_amount}</p>
        </div>
      )
    }
    else{
      return <></>
    }
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
              = <input type="text" name='resident_id' onChange={this.handleChange} className='inputcss' required="required" />
              <br /><br />


              <label className='lablecss'>
                Enter Bill Month
              </label>
              = <input type="text" name='month' onChange={this.handleChange} className='inputcss' required="required" placeholder='yyyy-mm' />
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
        <div className='row'>
          <div className='col'>
            <br/>
            {this.showBillDetails()}
          </div>
        </div>
      </div>
    );
  }
}

export default waterbillview;
