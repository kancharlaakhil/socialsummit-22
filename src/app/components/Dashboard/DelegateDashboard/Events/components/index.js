import React,{useState} from "react";
import AddNewEvent from "./AddNewEvent";
import RegisteredEvents from "./RegisteredEvents"
import Tabs from "./Tabs";
import './css/index.css'

const EventsMainComponent = () => {

    const tabs = [
        {   name : "Registered Events"},
        {   name : "Add New Event"}
    ]

    const [selectedTab, setSelectedTab] = useState(0);

    const changeSelectedIndex = (index) => setSelectedTab(index)

    return (
    <div className="events-main-component">
        <div className="col-6 tabs">
            <Tabs tabs={tabs} selectedIndex={selectedTab} changeSelectedIndex={changeSelectedIndex}></Tabs>
        </div>
        <div className="tab-main-view">{
            (selectedTab === 0) ? <RegisteredEvents></RegisteredEvents> :
            <AddNewEvent/>
        }

        </div>

    </div>
    )
}

export default EventsMainComponent