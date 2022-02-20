import React from 'react';
import './css/selectTasks.css'
import Dropdown from './images/dropdown.svg'

const SelectTasks = () => {
    return(
        <div className='select-tasks-container'>
            <div className='row select-tasks-header'>All Tasks (till now)</div>
            <div className='row select-tasks-dropdown'>
                <div className='col-9 select-task-name'>task 4</div>
                <div className='col-3 select-dropdown-svg'
                    style = {{
                        backgroundImage : `url(${Dropdown})`,
                        backgroundSize : 'contain',
                        backgroundPosition : 'center',
                        backgroundRepeat : 'no-repeat'
                    }}
                ></div>
            </div>
        </div>
    )
}

export default SelectTasks