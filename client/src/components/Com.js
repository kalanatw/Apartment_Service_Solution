import React, { Component } from 'react'
import './comp.css'; 


class Table extends Component {
    constructor(props) {
       super(props) 
       this.state = { 
          complaints: [
             { id: 1, date: '02.03.2022', category: 'Electricity', description: 'We have power outage since morning only in our block.'},
             { id: 2, date: '05.03.2022', category: 'Other', description: 'House no 12 plays loud music at everynight past days', },
             { id: 3, date: '10.03.2022', category: 'Air Conditon', description: 'A/C remote has broken', },
             { id: 4, date: '12.03.2022', category: 'Waste Management Issues', description: 'The garbage bin beside the A2 block has to be cleaned', }
          ]
       }
    }


    renderTableData() {
        return this.state.complaints.map((complaints, index) => {
           const { id, date, category, description } = complaints 
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{date}</td>
                 <td>{category}</td>
                 <td>{description}</td>
              </tr>
           )
        })
     }
  
     render() {
        return (
           <div>
              <h1 id='head'>Complaints Management</h1>
              <table id='complaints'>
                 <tbody>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }


     renderTableHeader() {
        let header = Object.keys(this.state.complaints[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
  
     render() {
        return (
           <div>
              <h1 id='head'>Complaints Management</h1>
              <table id='complaints'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }

 
}



export default Table