import React from 'react'
import "./Main.css"

function Main() {
  return (
    <div className='main-container'>
        <div className="imgbox">
            {/* <img src="public\images\image1.png" alt="" /> */}
        </div>
        <div className="cont">
            <span className='date'>11th - 12th March 2023</span>
            <p>Take the next step forward with National Social Summit <br /> 2023 and dabble in the color of inclusion.</p>
        </div>
        <div className="btnbox">
            <button className='btn2'>
              <a className='Rlink' href="https://socialsummit.iitr.ac.in/signup">Register</a>
              </button>
            <button  className='btn3'>
              <a className='plink' href="https://secure-ptg.payphi.com/pg/portal/pay/initiatePayOrder?merchantID=P_30861" target="_blank" rel="noopener noreferrer">Payment</a></button>
        </div>
        
      
    </div> 
  )
}

export default Main
