import React from 'react';
import IndividualRegistration from './IndividualRegistration';
import TeamRegistrationForm from './TeamRegistration';

const RegistrationForm = ({eventsList, selectedIndex, setParticipantDetails, appendTeamMembers, setLeader, changeTeamName}) => {
    
    return (
        <div className='event-registration-form-container'>
            { 
            eventsList.length?
               ( (eventsList[selectedIndex].isTeamEvent) ? 
               <TeamRegistrationForm event={eventsList[selectedIndex]} appendTeamMembers={appendTeamMembers} setLeader={setLeader} changeTeamName={changeTeamName} />:
               <IndividualRegistration event={eventsList[selectedIndex]} isLeader={false} isTeamMember={false} setParticipantDetails={setParticipantDetails} />):null
            }

        </div>
    )
}

export default RegistrationForm