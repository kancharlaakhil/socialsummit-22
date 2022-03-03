import React,{useState} from "react";
import AddNewEvent from "./AddNewEvent";
import RegisteredEvents from "./RegisteredEvents";
import MobileRegisteredEvents from '../MobileEvents/RegisteredEvents';
import MobileAddNewEvent from "../MobileEvents/AddNewEvent";
import Tabs from "./Tabs";
import './css/index.css'
import { useWidthAndHeight } from "../../../../../../hooks/useWidthAndHeight";

const EventsMainComponent = () => {

    
    let windowSize = useWidthAndHeight();
    let width = windowSize[0];
  

    const tabs = [
        {   name : "Registered Events"},
        {   name : "Add New Event"}
    ]

    const [selectedTab, setSelectedTab] = useState(0);

    const changeSelectedIndex = (index) => setSelectedTab(index)

    const tabMainViewClass = (width > 1150 ) ? 'tab-main-view' : 'mobile-tab-main-view'

    return (
    <div className="events-main-component">
        <div className="col-md-6 col-12 tabs">
            <Tabs tabs={tabs} selectedIndex={selectedTab} changeSelectedIndex={changeSelectedIndex}></Tabs>
        </div>
        <div className={tabMainViewClass}>{
            (selectedTab === 0) ?
            ( ( width > 1150) ?  <RegisteredEvents></RegisteredEvents>: <MobileRegisteredEvents/>
            ) :
            (( width > 1150) ?  <AddNewEvent/>: <MobileAddNewEvent/>) 
            
        }

        </div>

    </div>
    )
}

export default EventsMainComponent