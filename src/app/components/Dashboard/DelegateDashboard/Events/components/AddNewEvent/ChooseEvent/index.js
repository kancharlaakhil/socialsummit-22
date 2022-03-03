import React,{useState} from 'react';
import Dropdown from './Dropdown'

import './css/chooseEvent.css'

const checkboxMessage = "I hereby declare that the information furnished above is true, complete and correct to the best of my knowledge and belief."

const ChooseEvent = ({eventsList, handleSelectChange, onClickRegister}) => {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    


    return(
        <div className='choose-event-container'>
         <div className="dropdown-container">
            <Dropdown eventsList={eventsList} handleSelectChange={handleSelectChange}/>
          </div>
          <div className='checkbox-container'>
          <label className="checkbox-input">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                />
                {checkboxMessage}
              </label>
              <button className="choose-event-register-button" onClick={onClickRegister}>
              Register
            </button>

          </div>
         
              
            </div>
    )
}

export default ChooseEvent