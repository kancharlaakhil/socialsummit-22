import React,{useState} from 'react';

import MyTasksHeader from './MyTasksHeader';
import Details from './Details';
import SelectTasks from './SelectTasks'

import { connect } from 'react-redux';
import { GetAllTasksAction } from '../../../../../redux/actions/TaskAction'

import './css/index.css'

const MyTasks = ({tasks, getTasks}) => {

    const [index, setIndex] = useState(0);

    
    

    React.useEffect(()=> {
       getTasks();
        console.log('hey')
      },[getTasks]);


    const setDeets  = () =>{

     

        const deets = [
            {
                detailName : `Task #${index+1}`,
                detailValue : tasks[index]?.description
            },{
                detailName : 'Date Issued',
                detailValue : tasks[index]?.issuedDate   
            },
            {
                detailName : 'Deadline',
                detailValue : tasks[index]?.deadlineDate 
            },
            {
                detailName : 'Points to gain',
                detailValue : `${tasks[index]?.totalPoints} points (${tasks[index]?.eachPoints} each)`  
            }

        ]

        
    } 
    

    return (
        <div className='mytasks-container p-0 m-0 h-100'>
            <div className='row mytasks-header'>
                <MyTasksHeader/>
            </div>
            <div className='row mytasks-component'>
                
                <div className='col-md-6 details-component'>
                   
                </div>
                <div className='col-md-6 upload-component'>
                    
                </div>
            </div>

        </div>
    );
}


const mapStateToProps = (state) => {
  
    return {
     tasks : state.tasks,
    }
  }
  
  
const mapDispatchToProps = (dispatch) => {
    return {
      getTasks : () => {
        dispatch(GetAllTasksAction())
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MyTasks);