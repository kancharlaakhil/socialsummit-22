import React,{useState} from 'react';
import axios from 'axios'

const ShowTasks = () => {

    const [tasks, setTasks] = useState([])

    React.useEffect(() => {
        axios.get("/tasks").then((response) => {
            
          const tasks = response.data.data.data
          setTasks(tasks)
        });
        
      }, []);

      
    const getMonth = (month) => {
        if(month==='01') return 'Jan'
        else if (month ==='02') return 'Feb'
        else if (month ==='03') return 'Mar'
        else if (month ==='04') return 'Apr'
        else if (month ==='05') return 'May'
        else if (month ==='06') return 'Jun'
        else if (month ==='07') return 'Jul'
        else if (month ==='08') return 'Aug'
        else if (month ==='09') return 'Sep'
        else if (month ==='10') return 'Oct'
  
        else if (month ==='11') return 'Nov'
        else if (month ==='12') return 'Dec'
      }

    const convertDate = (date) => {
        const d = date?.split('T')[0];
        const use = d?.split('-');
        if(use){
            const month = getMonth(use[1]);
            const day = use[2];
            const year = use[0];
    
            const finalDate = `${day} ${month} ${year}`
    
            return finalDate
        }
       
    }

    return (
        <div className='admin-show-tasks-container'>
            {
                tasks.map((ele) => {
                    const issuedDate = convertDate(ele?.issuedDate);
                    const deadlineDate = convertDate(ele?.deadlineDate)


                    return(
                        <div>
                            <div> Task Name : {ele.name}</div>
                            <div> Task Description : {ele.description}</div>
                            <div> Issued Date : {issuedDate}</div>
                            <div> Deadline Date : {issuedDate}</div>
                            <div> Total Points : {ele.totalPoints}</div>
                            <div> Each Points : {ele.eachPoints}</div>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default ShowTasks