import React from "react";

import '../css/EventCard.css'

const EventCardLeft = ({image, name, description, rulebook, prizeWorth, id}) => {
    return (
        <div className="mobile-single-event-container">
            <div className="row h-100">
            <div className="col-5 h-100 mobile-image-container"
                style={{
                    backgroundImage : `url(${image})`,
                    backgroundSize : 'cover',
                    backgroundPosition : 'center',
                    backgroundRepeat : 'no-repeat'
                }}
            >

            </div>
            <div className="col-7 mobile-content-container">
            <div className="row" style={{ height : '5%'}}></div>
            <div className="row mobile-single-event-heading"
                style={{
                    height : '15%'
                }}
            > {name}</div>
                <div className="row"
                style={{
                    height : '15%'
                }}
                ></div>
                <div className="row"
                    style={{
                        height : '85%'
                    }}
                ></div>
                <div className="row mobile-single-event-description"
                     style={{
                        height : '85%'
                    }}
                >
                    <div className="row h-75 mobile-description-content">
                        {description}
                    </div>
                    <div className="row h-25 mobile-description-prizes p-0 m-0">
                        <div className="col-4 mobile-rulebook">{
                            rulebook? 
                            <a href={rulebook}>Rulebook</a>:''
                        }</div>
                        <div className="col-8 mobile-prize-worth p-0 m-0 d-flex justify-content-end">
                            Prize Worth :  
                            <span className="mobile-amount">{prizeWorth}</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default EventCardLeft