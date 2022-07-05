import React from "react";
//import TopBar from '../Shared/topbar';
//import Sidebar from '../Shared/sidebar';
//import LinkUp from "./linkup";
import DropDown from "./dropdown";
import Form from "./viewbill_water";
import Addwaterbill from "./paid_water";
//import '../../App.css';
import "./fullwater.css";
import { Link } from 'react-router-dom';



const subhead = {
  color: "#096857",
  fontSize: "20px",
  fontWeight: "bold",
};

export default function Fullwater() {
  return (
    <main className="fullbody">
      <div className="inline">
        <div className="heading">
          <p>Utility Bill Management</p>
        </div>
        <div>
            <Link to="/Summary">
              <button variant="primary" type="submit" className='historybutton'>View Histroy</button>
            </Link>



        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <p style={subhead}>Add Bill</p>
              <div>
                <DropDown />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p style={subhead}>View Bill</p>
              <Form />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p style={subhead}>Add Paid Amount</p>
              <Addwaterbill />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
