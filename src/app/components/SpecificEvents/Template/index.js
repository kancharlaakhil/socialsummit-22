import React from 'react';

import ExecutiveBoard from './components/ExecutiveBoard';
import Committees from './components/Committees';
import Perks from './components/Perks';
import EventPartners from './components/EventPartners';
import Header from './components/Header';
import Carousel from './components/Carousel/Events/index'
import SubEventsList from './components/SubEventsList';

const Template = ({header, subEventsList, executiveBoard, committees, perks, eventPartners}) => {

    /*
     <div>
            <Header/>
            <SubEventsList/>
            <ExecutiveBoard/>
            <Committees/>
            <Perks/>
            <EventPartners/>
            <Carousel width ="1500"/>

        </div>
    */

    /*
    {header ? <Header/> : null}
            {subEventsList ? <SubEventsList/> : null}
            {executiveBoard ? <ExecutiveBoard/> : null}
            {committees ? <Committees/> : null}
            {perks ?<Perks/> : null}
            {eventPartners ? <EventPartners/> : null}
            <Carousel width="1500"/>
    */
    return(
        <div>
            {header ? <Header data={header} /> : null}
            {subEventsList ? <SubEventsList data={subEventsList} /> : null}
            {executiveBoard ? <ExecutiveBoard data={executiveBoard} /> : null}
            {committees ? <Committees data={committees} /> : null}
            {perks ?<Perks data={perks} /> : null}
            {eventPartners ? <EventPartners data={eventPartners} /> : null}
            <Carousel width="1500"/>

        </div>
       
    )
}

export default Template