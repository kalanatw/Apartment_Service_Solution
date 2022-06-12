import React, { useState } from 'react'
import './Table.css'
import { Link } from 'react-router-dom'

const complaints = [
    { id: 1, reply:'Power supply would be back within 30mins', cStatus: 'Completed'},
    { id: 2, reply:'We will clearly inform the residents about this matter', cStatus:'Pending'},
    { id: 3, reply:'A new remote will be supplied', cStatus:'Completed'},
    { id: 4, reply:'We will immediately check this', cStatus:'Completed' }
]

function Table2() {
    const [error,setError] = useState('')
    const [reply,setReply] = useState('')
    
    return (
        <div>
            <div id='head'>Complaints Management</div>
            <table id='complaints' >
                <tbody>
                    <table >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Reply</th>
                                <th>Current Status</th>
                                <th>Action Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {complaints.map((user) => {
                                return (
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.reply}</td>
                                        <td>{user.cStatus}</td>
                                        <Link to="/updatepage">
                                        <td><button>update</button></td>
                                        </Link>
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

export default Table2