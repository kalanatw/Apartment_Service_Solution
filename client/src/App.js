import React, { Component } from 'react';
import './App.css';
import AddAppoinment from './Pages/Appoinment/AddAppoinment';
import TopBar from './components/topbar/topbar';
import Sidebar from './components/sidebar/sidebar';
import { Route, Routes, BrowserRouter } from "react-router-dom";

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

