import React, { Component } from 'react';
import './App.css';
import AddAppoimentForm from './components/form01';
import Complain from './components/Com';
import TopBar from './components/topbar';
import Sidebar from './components/sidebar';
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
          element={<AddAppoimentForm></AddAppoimentForm>}
        />
        <Route path="/Complaint%20Management" element={<Complain></Complain>} />
        
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

