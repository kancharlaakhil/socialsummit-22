import React from 'react';

import ProfileHeader from './ProfileHeader';
import Details from './Details';
import RegisteredDelegates from './RegisteredDelegates';


import './css/index.css'

const Profile = () => {

    const data = [
        {
            detailName : 'Name',
            detailValue : 'Pramegh Uikey'   
        },
        {
            detailName : 'CA Rank',
            detailValue : '12th Rank'   
        },
        {
            detailName : 'Email',
            detailValue : 'abcd@gmail.com'   
        },
        {
            detailName : 'Mobile No.',
            detailValue : '01234 56789'   
        },
        {
            detailName : 'College',
            detailValue : 'IIT ROORKEE'   
        },
        {
            detailName : 'Address',
            detailValue : 'B14, Type 4, Krishi Kunj Colony, Bajaj Nagar, City,State'   
        },
        {
            detailName : 'Registrations by your CA-ID',
            detailValue : '18 People'   
        }


    ]

    return (
        <div className='profile-container p-0 m-0 h-100'>
            <div className='row profile-header'>
                <ProfileHeader points='850'></ProfileHeader>
            </div>
            <div className='row profile-component'>

                <div className='col-md-6 details-component'>
                    <Details details={data}></Details>
                </div>
                <div className='col-md-6 delegates-registered'>
                    <RegisteredDelegates/>
                </div>
            </div>

        </div>
    );
}

export default Profile