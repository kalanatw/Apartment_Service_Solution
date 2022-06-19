import React from 'react'
import WelcomePic from '../../components/images/welcomePagePic.jpg'

function Welcomepage() {
  return (
    <div className='welcomecontainer'>
       <img src={WelcomePic}  />
       <button type='submit'>Login</button>
    </div>
    
  )
}

export default Welcomepage
