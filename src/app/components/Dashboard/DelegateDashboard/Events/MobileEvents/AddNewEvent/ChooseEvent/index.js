import React,{useState} from 'react';
import Dropdown from './Dropdown'

import './css/chooseEvent.css'

const checkboxMessage = "I hereby declear Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."

const ChooseEvent = ({eventsList, handleSelectChange, onClickRegister}) => {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    


    return(
        <div className='mobile-choose-event-container'>
         <div className="mobile-dropdown-container">
            <Dropdown eventsList={eventsList} handleSelectChange={handleSelectChange}/>
          </div>
          <div className='mobile-checkbox-container'>
          <label className="mobile-checkbox-input">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                />
                {checkboxMessage}
              </label>
              <button className="mobile-choose-event-register-button" onClick={onClickRegister}>
              Register
            </button>

          </div>
         
              
            </div>
    )
}

export default ChooseEvent