import React from 'react'
import '../css/Sign.css'
import email2 from '../images/email2.png'

const Sign = () => {
  return (
    <div className='signcon'>
      <div className="signinner">
        <div className="signemail">
          <div className="signimg">
            <img src={email2} alt="" />
          </div>
          <div className="input">
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sign
