import React , {useState} from 'react';
import MainComponent from './MainComponent';
import Navbar from './Navbar';

const Dashboard = (props) => {

    const options = [
        {
            optionName : "Profile",
            icon : "someicon"
        },
        {
            optionName : "Events",
            icon : "someicon"
        },
        {
            optionName : "Updates",
            icon : "someicon"
        },
        {
            optionName : "CA Leaderboard",
            icon : "someicon"
        },
        {
            optionName : "Timeline",
            icon : "someicon"
        }

    ]

    const [selectedOption, setSelectedOption] = useState(0);

    const OnNavbarClick = (option) =>{
        setSelectedOption(option);
    }


  return(
      <div>
          <Navbar selectedOption = {selectedOption} selectFunction={OnNavbarClick} options = {options}></Navbar>
            <MainComponent selectedOption={selectedOption} options={options}></MainComponent>
      </div>
  )
}

export default Dashboard;