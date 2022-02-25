import React from "react";


import '../css/EventCard.css'

const EventCardRight = ({image, name, description, rulebook, prizeWorth, id, link1, link2}) => {
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
                        <div className="row case-study-links d-flex justify-space-between">
                            <div className="col-6 d-flex justify-content-start case-study-link">{link1 ? 
                            <a href={link1}>Case Study - 1</a>:''}</div>
                            <div className="col-6 d-flex justify-content-end case-study-link">{link2 ? 
                            <a href={link2}>Case Study - 2</a>:''}</div>
                        </div>
                    </div>
                    <div className="row h-25 mobile-description-prizes d-flex justify-content-between p-0 m-0">
                        <div className="col-4 mobile-rulebook">{
                            rulebook? 
                            <a href={rulebook}>Rulebook</a>:''
                        }</div>
                        {prizeWorth?
                        <div className="col-6 mobile-prize-worth d-flex justify-content-end">
                        Prize Worth :  
                        <span className="mobile-amount">{prizeWorth}</span>
                    </div>:''}
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