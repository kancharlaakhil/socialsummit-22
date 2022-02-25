import React from "react";


import '../css/EventCard.css'

const EventCardRight = ({image, name, description, rulebook, prizeWorth, id, link1, link2}) => {
    return (
        <div className="single-event-container">
            <div className="row h-100">
            <div className="col-9 content-container">
            <div className="row" style={{ height : '5%'}}></div>
            <div className="row h-25 single-event-heading-right d-flex justify-content-end"> {name}</div>
                <div className="row h-25"></div>
                <div className="row h-75"></div>
                <div className="row h-75 single-event-description-right">
                    <div className="row h-75 description-content">
                        {description}
                        <div className="row case-study-links d-flex justify-space-between" style={{width : '50%'}}>
                            <div className="col-6 d-flex justify-content-start case-study-link">{link1 ? 
                            <a href={link1}>{(name === "Policy Case Competition")? 'Policy-Case-1' : 'Case-Study-1' }</a>:''}</div>
                            <div className="col-6 d-flex justify-content-end case-study-link">{link2 ? 
                            <a href={link2}>{(name === "Policy Case Competition")? 'Policy-Case-1' : 'Case-Study-1' }</a>:''}</div>
                        </div>
                    </div>
                    <div className="row h-25 description-prizes">
                        <div className="col-6 rulebook">{
                            rulebook? 
                            <a href={rulebook}>Rulebook</a>:''
                        }</div>
                        {prizeWorth?
                        <div className="col-6 prize-worth d-flex justify-content-end">
                        Prize Worth :  
                        <span className="amount">{prizeWorth}</span>
                    </div>:''}
                    </div>
                </div>
            </div>
            <div className="col-3 image-container"
                style={{
                    backgroundImage : `url(${image})`,
                    backgroundSize : 'cover',
                    backgroundPosition : 'center',
                    backgroundRepeat : 'no-repeat'
                }}
            >

            </div>
            
            </div>
        </div>
    )
}

export default EventCardRight