import React from "react";
//import TopBar from '../Shared/topbar';
//import Sidebar from '../Shared/sidebar';
import LinkUp from "./linkup";
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
    color:'black',
    fontSize:'18px'
  }
  
  

  export default function Fullwater() {
    return (
//className="fullbody"
        <main >
            <div className ="inline">
                <div className="heading">
                    <p>Utility Bill Management</p>
                </div>
                <div>
                    <LinkUp/>
                </div>
               
                <div class="waterbill">
                    <p style={para}>Water Bill</p>
                    <p style={subhead}>Add Water Bill</p><br/>
                    <div>
                        <DropDown />
                    </div>

                    <p style={subhead}>Add Paid Amount</p><br/>
                    <div className="formbody">
                        <Addwaterbill />
                    </div>
            

                    <p style={subhead}>View Water Bill</p><br/>
                    <div className="formbody">
                        <Form />
                    </div> 
                </div>   
            </div>
        </main>
    )
}

