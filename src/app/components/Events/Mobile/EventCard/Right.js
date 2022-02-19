import React from "react";


import '../css/EventCard.css'

const EventCardRight = ({image, name, description, rulebook, prizeWorth, id}) => {
    return (
        <div className="mobile-single-event-container">
            <div className="row h-100">
            <div className="col-7 mobile-content-container">
            <div className="row" style={{ height : '5%'}}></div>
            <div className="row mobile-single-event-heading-right d-flex justify-content-end"
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
                <div className="row mobile-single-event-description-right"
                 style={{
                    height : '85%'
                }}
                >
                    <div className="row h-75 mobile-description-content">
                        {description}
                    </div>
                    <div className="row h-25 mobile-description-prizes">
                        <div className="col-4 p-0 m-0 mobile-rulebook">{
                            rulebook? 
                            <a href={rulebook}>Rulebook</a>:''
                        }</div>
                        <div className="col-8 p-0 m-0 mobile-prize-worth d-flex justify-content-end align-content-center">
                            Prize Worth :  
                            <span className="mobile-amount">{prizeWorth}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-5 mobile-image-container"
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