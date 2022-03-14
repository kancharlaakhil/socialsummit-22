import React,{useState} from 'react';
import axios from 'axios'

const CATaskSubmissions = ({task, ca, onCloseClick}) => {

    const baseBackendLink = `https://api.socialsummit.iitr.ac.in`

    const [taskSubmissions, setTaskSubmissions] = useState([]);
    const [points, setPoints] = useState(0);


    React.useEffect(() => {
        axios.get(`/taskSubmission/${task._id}/${ca._id}`).then((response) => {
            console.log("hey")
            console.log(response.data)
          const taskSubmissions = response.data.data.data
          console.log(taskSubmissions)
          setTaskSubmissions(taskSubmissions)
         
        });
        
      }, [ca, task]);

      const onSubmissionApprovedClick = async () => {
          console.log("submission approved", taskSubmissions[0])

          await axios.patch(`/admin/statusOfCompletionUpdate/${taskSubmissions[0]._id}`, {
              "statusOfApproval" : "approved",
              "taskName": `${task.name}`
          })

      }

      const onSubmissionRejectedClick = async () => {
        console.log("submission rejected")
        await axios.patch(`/admin/statusOfCompletionUpdate/${taskSubmissions[0]._id}`, {
            "statusOfCompletion" : "rejected",
            "taskName": `${task.name}`
        })
    }

    const onAddPoints = async () => {
        const myBody = {
            "points" : points
        }
        const updatedCA = await axios.patch(`/admin/updateCAPoints/${ca._id}`, myBody)
    }

    return(
        <div className='ca-task-submission-container'>
            {
                taskSubmissions.map((ele) => {
                    return(
                        <div className='task-submission-container'>
                            <div className='task-submission-status-of-approval'>
                                Status of Approval : {ele.statusOfApproval}
                            </div>
                            <div className='link-to-submitted-image'>
                                Facebook Upload : {
                                    (ele.facebookUpload) ? <a href={`${baseBackendLink}/${ele.facebookUpload}}`}>facebookUpload</a>:"Not Uploaded"
                                }
                                Instagram Upload : {
                                    (ele.instagramUpload) ? <a href={`${baseBackendLink}/${ele.instagramUpload}}`}>instagramUpload</a>:"Not Uploaded"
                                }
                                Whatsapp Upload : {
                                    (ele.whatsappUpload) ? <a href={`${baseBackendLink}/${ele.whatsappUpload}}`}>whatsappUpload</a>:"Not Uploaded"
                                }
                                Linkedin Upload : {
                                    (ele.linkedinUpload) ? <a href={`${baseBackendLink}/${ele.linkedinUpload}}`}>linkedinUpload</a>:"Not Uploaded"
                                }
                            </div>

                        </div>
                    )
                })
            }

            <div>
                <button className='approve-task-submissions-button' onClick={onSubmissionApprovedClick}> Approve </button>
                <button className='reject-task-submissions-button' onClick={onSubmissionRejectedClick}> Reject </button>
            </div>
            <div className='points-input'>
            <div className="pt-5 th-form-group">
                  <input
                    type="number"
                    className="th-form-control form-control"
                    id=""
                    name=""
                    onChange={(event) => {
                      const points = event.target.value;
                      setPoints(points)
                    }}
                  />
                  <label>
                    Points
                  </label>
                  <div>
                    <button onClick={onAddPoints}> Add Points </button>
                  </div>
            </div>
            </div>
            <div onClick={onCloseClick} style={{ height : '10%', cursor:"pointer"}}> Close </div>
        </div>
    )

}

export default CATaskSubmissions