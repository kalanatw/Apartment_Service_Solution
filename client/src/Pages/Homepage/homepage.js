import React from 'react'
import Home from '../../components/images/home2.jpg';
import './homepage.css'

function Homepage() {
  return (
    <div className='page1'>
        <div className='covercontainer'>
            <div className='imagesize'>
             <img src={Home} />
            </div>
            
        </div>

        <div className='header1'>
            <h3>Services</h3>
        </div>
        <div className='line'>
            <hr></hr>
        </div>

        <div className='features'>
            <div className='container1'>
                    <div className='text1'>
                    <h4>Profile</h4>
                </div>
            </div>

            <div className='container2'>
                    <div className='text2'>
                    <h4>User Management</h4>
                    </div>
            </div>

            <div className='container3'>
                    <div className='text3'>
                    <h4>Appointments</h4>
                    </div>
            </div>

            <div className='container4'>
                    <div className='text4'>
                    <h4>Bill Management</h4>
                    </div>
            </div>

            <div className='container5'>
                    <div className='text5'>
                    <h4>Complanit Management</h4>
                    </div>
            </div>

            <div className='container6'>
                    <div className='text6'>
                    <h4>Service Management</h4>
                    </div>
            </div>
        </div>

    </div>
    
  )
}

export default Homepage
