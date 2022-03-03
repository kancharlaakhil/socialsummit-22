import React from 'react';
import IndividualRegistration from './IndividualRegistration';
import TeamRegistrationForm from './TeamRegistration';

const RegistrationForm = ({eventsList, leader, members, selectedIndex, setParticipantDetails, appendTeamMembers, removeTeamMember,   removeLeader, setLeader, changeTeamName}) => {
    
    React.useEffect(()=>{
        console.log("re rendering")
    }, [leader, members])

    return (
        <div className='mobile-event-registration-form-container'>
            { 
            eventsList.length?
               ( (eventsList[selectedIndex].isTeamEvent) ? 
               <TeamRegistrationForm leader={leader} members={members} event={eventsList[selectedIndex]} appendTeamMembers={appendTeamMembers} setLeader={setLeader} changeTeamName={changeTeamName} removeTeamMember={removeTeamMember} removeLeader={removeLeader} />:
               <IndividualRegistration event={eventsList[selectedIndex]} isLeader={false} isTeamMember={false} setParticipantDetails={setParticipantDetails} />):null
            }

        </div>
    )
}

export default RegistrationForm