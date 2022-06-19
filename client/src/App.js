import React, { Component } from 'react';
import './App.css';
import AddAppoinment from './Pages/Appoinment/AddAppoinment';
import TopBar from './components/topbar/topbar';
import Sidebar from './components/sidebar/sidebar';
import SuccessOTP from './Pages/Appoinment/SuccessAppoinment';
import AppoinmentTable from './Pages/Appoinment/AppoinmentTable';

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Atable from './Pages/AdminRegistration/adminregistration';
import Homepage from './Pages/Homepage/homepage';
import LoginPage from './Pages/login/login';
import Welcomepage from './Pages/WelcomePage/welcomepage';
import Rtable from './Pages/ResidentManagement/residentmanagement';
import Stable from './Pages/SecurityManagement/securitymanagement';

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
          path="/"
          element={<Welcomepage />}
          />
          
           <Route
          path="/LoginPage"
          element={<LoginPage></LoginPage>}
          /> 
          
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

        <Route
          path="/ResidentManagement"
          element={<Rtable></Rtable>}
        />

        <Route
          path="/SecurityManagement"
          element={<Stable></Stable>}
        />



        <Route
          path="/Home"
          element={<Homepage></Homepage>}
        />

         <Route
          path="/Welcomepage"
          element={<Welcomepage></Welcomepage>}
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

