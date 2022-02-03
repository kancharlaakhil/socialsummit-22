import React from 'react';
import './css/index.css'

const ProfileHeader = ({points}) => {
    return (
        <div className='profile-header-container'>
            <div className='row'>
                <div className='col-md-6'
                    style={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '2rem',
                        lineHeight: '2.5rem',

                        color: '#222222'

                    }}
                >
                    My Profile
                </div>
                <div className='col-md-6'>
                    <div className='col-md-8'> Current Points : </div>
                    <div className='col-md-4 points'>{points}</div>
                </div>

            </div>

        </div>
    )
}

export default ProfileHeader;
