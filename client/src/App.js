import React, { Component } from 'react';
import './App.css';
import AddAppoinment from './Pages/Appoinment/AddAppoinment';
import TopBar from './components/topbar/topbar';
import Sidebar from './components/sidebar/sidebar';
//import BillAdding from './Pages/UtilityBill/BillAdding/formtest2'
import BillAdding from './Pages/UtilityBill/BillAdding/form2';
import WaterBill from './Pages/UtilityBill/UtilityBill_Both/fullwater';
//import HistoryBill from './Pages/UtilityBill/UtilityBill_Both/summary'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Summary from './Pages/UtilityBill/UtilityBill_Both/summary';
import SummaryByResident from './Pages/UtilityBill/UtilityBill_Both/summarybyResident';

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
          path="/WaterBill"
          element={<WaterBill></WaterBill>}
        />


      {/*<Route
          path="/BillAdding"
          element={<BillAdding></BillAdding>}
  />*/}

      <Route
          path="/BillAdding"
          element={<BillAdding></BillAdding>}
        />

      <Route
          path="/Summary"
          element={<Summary></Summary>}
        />

        <Route
          path="/SummaryByResident"
          element={<SummaryByResident></SummaryByResident>}
        />

      {/*<Route
          path="/HistoryBill"
          element={<HistoryBill></HistoryBill>}
      />*/}
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

