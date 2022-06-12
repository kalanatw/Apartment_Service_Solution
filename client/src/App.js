import React, { Component } from 'react';
import './App.css';
import AddAppoimentForm from './components/appoinment';
import TopBar from './components/topbar/topbar';
import Sidebar from './components/sidebar/sidebar';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ComplaintsOne from './ComplaintsPages/pageOne';
import ComplaintsTwo from './ComplaintsPages/pageTwo';
import Updatepage from './ComplaintsPages/Updatepage';

function App (){
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
         <Route
          path="/Complaints"
          element={<ComplaintsOne></ComplaintsOne>}
        />
        <Route
          path="/ComplaintsPgTwo"
          element={<ComplaintsTwo></ComplaintsTwo>}
        />
      <Route
          path="/updatepage"
          element={<Updatepage />}
        />

        
      </Routes>
          </BrowserRouter>


        
       
      

         
        </div>
      </div>
      </div>
      
    </main>

    
  );
}

export default App;

