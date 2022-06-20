import React from 'react';
import './Button.css'; 


function Button() {
    return (
    <table className='buttons'>
        <tr>
            <td className='tdcss'>
                <div class='boxbill'>
                    <div className='navMenu'>
                        <a href="/ComplaintsPgTwo" color="black">Reply</a>
                    </div>
                </div>
            </td>
            <td>
                <div class='boxbill'>
                     <div className='navMenu'>
                        <a href="/ComplaintsPgTwo" color="black">Current Status</a>
                    </div>
                </div>
            </td>
        </tr>
    </table>

    );
}

export default Button;