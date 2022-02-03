import React from "react";

import SingleComponent from "./SingleComponent";

import "./css/Navbox.css";

function Navbox({options, selectedIndex, onComponentClick}) {
    console.log('navbar' ,onComponentClick)

  return (
    <div className="navbox-container">
        {
            options.map((element, index) =>{
                console.log(element)
                return(
                    <div className="row" id={index}  onClick={()=>{
                        onComponentClick(index);
                    }}>
                        <SingleComponent componentName={element.componentName} isSelectedIcon ={element.isSelectedIcon} isNotSelectedIcon ={element.isNotSelectedIcon}  selected={selectedIndex===index}></SingleComponent>
                    </div>
                    
                )
            })
        }

    </div>
  );
}

export default Navbox;