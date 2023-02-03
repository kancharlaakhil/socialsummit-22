import React from 'react'
import "./Speakers.css"
import Imgbox from "./Imgbox"

import img1 from "./images/image 5189.png"
import img2 from "./images/image 5190 (1).png"
import img3 from "./images/image 5199 (1).png"
import img4 from "./images/image 5198 (1).png"

function Speakers() {
  
  return (
    <div className='speaker-container'>
        <div className="speakercontent">
            <h2 className='hd'>Past <br /> Speakers</h2>
            
            <button id='speakrbtn' className='btn3'>
              <a className='plink' href="https://socialsummit.iitr.ac.in/speakers">See More</a>
            </button>
        </div>
        <div className="mobspkrcontent">
          <h3 className='mobhd'>Past Speakers</h3>
        </div>
        <div className="imgbox2">
                <Imgbox
                heading="DEVENDRA JHAJHARIA"
                // desc="daal do kuch bhi"
                src={img1}
                />

                <Imgbox 
                heading="Dr. RODERICO H. OFRIN"
                // desc="daal do kuch bhi"
                src={img2}
                />
                <Imgbox
                heading="Shri. Pushkar Singh Dhami"
                src={img3}
                />
                <Imgbox
                heading="Sonam Wangchuk"
                src={img4}
                />
                

            </div>
      <button className='mobsprbtn btn3' >
        <a className='plink' href="https://socialsummit.iitr.ac.in/speakers">See More</a>
      </button>
      
    </div>
  )
}

export default Speakers
