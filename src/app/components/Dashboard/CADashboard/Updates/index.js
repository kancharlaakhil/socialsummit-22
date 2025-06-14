import React from 'react';

import UpdatesHeader from './UpdatesHeader';
import UpdatesList from './UpdatesList'

import './css/index.css'

const Updates = () => {


    return (
        <div className='updates-container p-0 m-0 h-100'>
            <div className='row updates-header'>
                <UpdatesHeader/>
            </div>
            <div className='row updates-component'>

                <UpdatesList></UpdatesList>
            </div>

        </div>
    );
}

export default Updates;