import React from 'react';

import ProfileHeader from './ProfileHeader';

import './css/index.css'

const ProfileNew = () => {
    return (
        <div className='profile-container'>
            <div className='profile-header'>
                <ProfileHeader points='850'></ProfileHeader>
            </div>
            <div className='row profile-component'>

                <div className='col-md-6 details-component'></div>
                <div className='col-md-6 delegates-registered'></div>
            </div>

        </div>
    );
}

export default ProfileNew