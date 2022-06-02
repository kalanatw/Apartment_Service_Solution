// import Sidebar from './components/sidebar';
// import TopBar from './components/topbar';
import React, { Component } from 'react'
import './second.css'; 
//import SecButton from './SecButton';

class Second extends Component {
    constructor(props) {
       super(props) 
       this.state = { 
          admin: [
             { id: 1, reply: ' ', current_status: ''},
             { id: 2, reply: ' ', current_status: ''},
             { id: 3, reply: ' ', current_status: ''},
             { id: 4, reply: ' ', current_status: ''}
          ]
       }
    }


    renderTableData() {
        return this.state.admin.map((admin, index) => {
           const { id, reply, current_status } = admin 
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{reply}</td>
                 <td>{current_status}</td>
              </tr>
           )
        })
     }
  
     render() {
        return (
           <div>
              <h1 id='head'>Complaints Management</h1>
              <table id='admin'>
                 <tbody>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }


     renderTableHeader() {
        let header = Object.keys(this.state.admin[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
  
     render() {
        return (
           <div>
              <h1 id='head'>Complaints Management</h1>
              <table id='admin'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }

 
}



export default Second
