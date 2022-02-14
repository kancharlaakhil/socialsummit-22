import { AdminActionType } from "../actions/type";


const taskState = []

const uploadTaskReducer = (state = taskState, action) => {
    
    switch (action.type){
        case AdminActionType.UPLOAD_TASK_SUCCESS : 
            const newTask = action.payload
            const newState = [...state, newTask]

            return newState;

       
        case AdminActionType.UPLOAD_TASK_FAIL : 
            return state;

       

        default : return state
    }
 }

 export default uploadTaskReducer
