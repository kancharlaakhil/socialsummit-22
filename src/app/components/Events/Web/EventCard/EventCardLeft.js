import React from "react";


import '../css/EventCard.css'

const EventCardLeft = ({image, name, description, rulebook, prizeWorth, id}) => {
    return (
        <div className="single-event-container">
            <div className="row h-100">
            <div className="col-3 image-container"
                style={{
                    backgroundImage : `url(${image})`,
                    backgroundSize : 'cover',
                    backgroundPosition : 'center',
                    backgroundRepeat : 'no-repeat'
                }}
            >

            </div>
            <div className="col-9 content-container">
            <div className="row" style={{ height : '5%'}}></div>
            <div className="row h-25 single-event-heading"> {name}</div>
                <div className="row h-25"></div>
                <div className="row h-75"></div>
                <div className="row h-75 single-event-description">
                    <div className="row h-75 description-content">
                        {description}
                    </div>
                    <div className="row h-25 description-prizes">
                        <div className="col-6 rulebook">{
                            rulebook? 
                            <a href={rulebook}>Rulebook</a>:''
                        }</div>
                        <div className="col-6 prize-worth d-flex justify-content-end">
                            Prize Worth :  
                            <span className="amount">{prizeWorth}</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default EventCardLeft