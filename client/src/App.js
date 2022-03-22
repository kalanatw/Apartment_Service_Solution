import React, { Component } from 'react';
import './App.css';
import Form from './components/form01';
import TopBar from './components/topbar';
import Sidebar from './components/sidebar';

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
        <h2>Add Appoinment</h2><br/>
        <div className='formbody'>
          < Form/>
        </div>
      </div>
      </div>
    </main>
  );
  }
}

export default App;

