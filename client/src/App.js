import React, { Component } from 'react';
import './App.css';
import AddAppoinment from './Pages/Appoinment/AddAppoinment';
import TopBar from './components/topbar/topbar';
import Sidebar from './components/sidebar/sidebar';
import SuccessOTP from './Pages/Appoinment/SuccessAppoinment';
import AppoinmentTable from './Pages/Appoinment/AppoinmentTable';

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Atable from './Pages/AdminRegistration/adminregistration';

class App extends Component {
  render () {
  return (
    <main>
      <div>
        <TopBar/>
      </div>
      <div className ="App">
       <Sidebar />
      </div>
      <div className ="inline">
      <div className='bodycss'>
        
        <div className='formbody'>
          <BrowserRouter>
          <Routes>
        <Route
          path="/Appointment"
          element={<AddAppoinment></AddAppoinment>}
        />
        <Route
          path="/otp"
          element={<SuccessOTP></SuccessOTP>}
        />
         <Route
          path="/AppoinmentTable"
          element={<AppoinmentTable></AppoinmentTable>}
        />

        <Route
          path="/AdminManagement"
          element={<Atable></Atable>}
        />

      </Routes>
          </BrowserRouter>
         
        </div>
      </div>
      </div>
      
    </main>

    
  );
  }
}

export default App;

