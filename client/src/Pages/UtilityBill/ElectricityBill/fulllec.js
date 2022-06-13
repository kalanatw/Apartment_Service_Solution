//import React, { Component } from 'react';
import './fulllec.css';
import Addelecbill from './dropdown2';
import ViewLec from './viewlecbill';
import Addelecpaid from './paidadd';
//import { green } from "@mui/material/colors";

const para = {
  color: '#096857',
  fontSize:'23px',
  fontWeight:'bold'
  
}

const subhead = {
  color:'black',
  fontSize:'18px'
}

function App() {

  return (
    //className="fullbody"
    <main >
      
        <div className ="inline">
            <div className="heading">
                <p>Utility Bill Management</p>
            </div>


            <p style={para}>Electricity Bill</p>
            <p style={subhead}>Add Electricity Bill</p><br/>
            <div>
                <Addelecbill />
            </div>

            <p style={subhead}>View Electricity Bill</p><br/>
            <div className='formbody'>
                <ViewLec />
            </div>


            <p style={subhead}>Add Paid Amount</p><br/>
            <div className='formbody'>
                <Addelecpaid />
            </div>
        </div>
      
    </main>
  );
}


export default App;
