import React from "react";
//import TopBar from '../Shared/topbar';
//import Sidebar from '../Shared/sidebar';
//import LinkUp from "./linkup";
import DropDown from './dropdown';
import Form from './viewbill_water';
import Addwaterbill from './paid_water';
//import '../../App.css';
import './fullwater.css';


const para = {
    color: '#096857',
    fontSize:'23px',
    fontWeight:'bold',
    
  }
  
  const subhead = {
    color:'#096857',
    fontSize:'20px',
    fontWeight:'bold'
  }
  
  

export default function Fullwater() {
    return (
        <main className="fullbody">
            <div className ="inline">
                <div className="heading">
                    <p>Utility Bill Management</p>
                </div>
               {/*} <div>
                    <LinkUp/>
    </div>*/}
               
                <div>
                    {/*<p style={para}>Water Bill</p>*/}
                    <br/>
                    <p style={subhead}>Add Bill</p><br/>
                    <div>
                        <DropDown />
                    </div>

                    <br/><br/>
                    <p style={subhead}>View Bill</p><br/>
                    <div className="formbody">
                        <Form />
                    </div> 

                    
                    <p style={subhead}>Add Paid Amount</p><br/>
                    <div className="formbody">
                        <Addwaterbill />
                    </div>
                </div>   
            </div>
        </main>
    )
}

