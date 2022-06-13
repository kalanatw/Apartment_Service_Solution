import React from 'react';
import './linkup.css'; 

function LinkUp() {
    return (
    <table className='tablecss'>
        <tr>
            <td className='tdcss'>
                <div class='boxbill'>
                    <div className='navMenu'>
                        <a href="#waterbill" color="balck">Water Bill</a>
                    </div>
                </div>
            </td>
            <td>
                <div class='boxbill'>
                     <div className='navMenu'>
                        <a href="/Electricity" color="balck">Electricity Bill</a>
                    </div>
                </div>
            </td>
        </tr>
    </table>

    );
}

export default LinkUp;