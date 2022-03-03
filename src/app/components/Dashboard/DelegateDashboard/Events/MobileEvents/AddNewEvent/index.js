import React,{useState} from 'react';
import ChooseEvent from './ChooseEvent';
import RegistrationForm from './RegistrationForm';

import axios from 'axios'

const AddNewEvent = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [eventsList, setEventsList] = useState([]);

    const [participant, setParticipant] = useState({});
    const [teamMembers, setTeamMembers] = useState([]);
    const [teamLeader, setTeamLeader] = useState({});
    const [teamName, setTeamName] = useState('')

    React.useEffect(() => {
        axios.get("/events").then((response) => {
            const events = response.data.data.data
            setEventsList(events)
         
        });
        
      }, []);

    const onClickRegister = async () => {
        if(eventsList[selectedIndex].isTeamEvent){


            const registerObject = {
                event : eventsList[selectedIndex]._id,
                eventName : eventsList[selectedIndex].name,
                eventInfo : eventsList[selectedIndex].info,
                members : teamMembers,
                leader : teamLeader,
                teamName 
            }
            await axios.post("/teams", registerObject)
        }
        else{
            
            const registerObject = {
                event : eventsList[selectedIndex]._id,
                eventName : eventsList[selectedIndex].name,
                eventInfo : eventsList[selectedIndex].eventInfo,
            }
            await axios.post("/eventRegistrations", registerObject)

        }
      
    }

    const setParticipantDetails = (details) => {
        setParticipant(details)
    }

    const appendTeamMembers = (member) => {
        setTeamMembers((teamMembers)=>[...teamMembers, member])
    } 

    const removeTeamMember = (index) => {
        const newMembers = teamMembers.filter((ele, i) => index!==i )
        console.log("now new members", newMembers);
        setTeamMembers(newMembers)
    }

    const removeLeader = () =>{
        console.log("leader removed")
        setTeamLeader({})
        const newMembers = teamMembers.filter((ele, i) => !ele.isLeader )
        console.log("now new members", newMembers);
        setTeamMembers(newMembers)
    }

    const setLeader = (leader) => {
        setTeamLeader(leader)
    }

    const changeTeamName= (name) => {
        setTeamName(name)
    }


      const handleSelectChange = (index) => {
          setSelectedIndex(index)
      }

    

    return (
        <div className='row add-new-event-container'>
            <div className='col-12 choose-event'>
                <ChooseEvent eventsList={eventsList} handleSelectChange={handleSelectChange} onClickRegister={onClickRegister} />
            </div>
            <div className='col-12 event-specific-registration-form h-100'>
                <RegistrationForm leader={teamLeader} members={teamMembers} eventsList={eventsList} selectedIndex={selectedIndex} setParticipantDetails={setParticipantDetails}  appendTeamMembers={appendTeamMembers} removeTeamMember={removeTeamMember} removeLeader={removeLeader} setLeader={setLeader} changeTeamName={changeTeamName} />
            </div>
        </div>
    )
}

export default AddNewEvent;