import React , {useState} from "react";
import axios from 'axios'
import { connect } from 'react-redux';

import SingleComponent from "./SingleComponent";

function GetAllRegistration(){

    const [delegatesState, setDelegatesState] = useState([])

    React.useEffect(() => {
        axios.get("/auth/getAllUsers?role=delegate").then((response) => {
          setDelegatesState(response.data.data.data);
        });
      }, []);

    
    
    return (


        <div className="delegate-container"
            style ={{
                marginTop : '10rem'
            }}
        >
            <div className="row" style={{ marginLeft : '6rem', marginRight : '6rem'}}>
                <div className="col-3" style={{
                    fontSize : '2rem',
                  
                }}>Name</div>
                 <div className="col-3" style={{
                    fontSize : '2rem'
                }}>Email</div>
                 <div className="col-3" style={{
                    fontSize : '2rem',
                   
                }}>Contact Number</div>
                <div className="col-3" style={{
                    fontSize : '2rem',
                   
                }}>College</div>

            </div>
            {
                delegatesState.map(ele=> (
                    <SingleComponent name={ele.name} college={ele.college} contactNumber={ele.contactNumber} email={ele.email}></SingleComponent>
                ))
            }
        </div>
    )
}

export default GetAllRegistration
