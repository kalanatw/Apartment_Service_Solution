import React from 'react'
import './Table.css'


const complaints = [
    { complaintId: 1, date: '02.03.2022', category: 'Electricity', description: 'We have power outage since morning only in our block.' },
    { complaintId: 2, date: '05.03.2022', category: 'Other', description: 'House no 12 plays loud music at everynight past days', },
    { complaintId: 3, date: '10.03.2022', category: 'Air Conditon', description: 'A/C remote has broken', },
    { complaintId: 4, date: '12.03.2022', category: 'Waste Management Issues', description: 'The garbage bin beside the A2 block has to be cleaned', }
]

function Table1() {
    return (
        <div>
            <div id='head'>Complaints Management</div>
            <table id='complaints' >
                <tbody>
                    <table >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {complaints.map((user) => {
                                return (
                                    <tr>
                                        <td>{user.complaintId}</td>
                                        <td>{user.date}</td>
                                        <td>{user.category}</td>
                                        <td>{user.description}</td>
                                    </tr>

                                )
                            })}

                        </tbody>
                    </table>
                </tbody>
            </table>
        </div>
    )
}

export default Table1