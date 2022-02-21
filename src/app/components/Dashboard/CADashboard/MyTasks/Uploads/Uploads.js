/*
import React from "react";
import {AiOutlineUpload} from "react-icons/ai"

import './App.css'


function Change(e){

  let files = e.target.files;
  let reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload=(e)=>{
    console.warn("img data", e.target.result)
     //request for file upload
  }
 
}



function Uploads()  {
  

    return (
      <div >
        <div className="th-home-CurrentTask">
          <div>1. </div>
          <div>
             Instagram
          </div>
          <div>
          <input type="file" name="file" id="file1" class="inputfile" onChange={(e)=>Change(e)}/>
          <label for="file1">Upload <AiOutlineUpload></AiOutlineUpload></label>
          </div>
        </div>
        <div className="th-home-CurrentTask">
          <div>2. </div>
          <div>
             Facebook
          </div>
          <div>
          <input type="file" name="file" id="file2" class="inputfile"  onChange={(e)=>Change(e)} />
          <label for="file2">Upload <AiOutlineUpload></AiOutlineUpload></label>
          </div>
        </div>
        <div className="th-home-CurrentTask">
          <div>3. </div>
          <div>
             LinkedIn
          </div>
          <div>
          <input type="file" name="file" id="file3" class="inputfile" onChange={(e)=>Change(e)}/>
          <label for="file3">Upload <AiOutlineUpload></AiOutlineUpload></label>
          </div>
        </div>
        <div className="th-home-CurrentTask">
          <div>4. </div>
          <div>
             Whatsapp
          </div>
          <div>
          <input type="file" name="file" id="file4" class="inputfile" onChange={(e)=>Change(e)}/>
          <label for="file4">Upload <AiOutlineUpload></AiOutlineUpload></label>
          </div>
          
        </div>
        <button className="Submitbtn">Submit</button>
      </div>
        
    );
  
}

export default Uploads;
*/