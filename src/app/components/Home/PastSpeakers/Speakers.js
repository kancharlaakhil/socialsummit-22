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
            <button className='btn3'>See More</button>
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
      
    </div>
  )
}

export default Speakers
