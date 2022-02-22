import React from "react";
import './css/updateList.css';
import profilephoto from "./images/ProfilePhoto.svg";

function UpdatesList() {
  const updates = [
    {
      createdAt: "1 Feb 2022",
      allUpdates: [
        {
          updateFor: "Admin",
          updateBy: "Admin",
          updateStatement: "Task has been updated",
        },
        {
          updateFor: "Admin",
          updateBy: "You",
          updateStatement: "Task has been updated finally",
        },
        {
          updateFor: "Admin",
          updateBy: "You",
          updateStatement: "Task has been updated finally",
        },
        {
          updateFor: "Admin",
          updateBy: "You",
          updateStatement: "Task has been updated finally",
        },
      ],
    },
    {
      createdAt: "2 Feb 2022",
      allUpdates: [
        {
          updateFor: "Admin",
          updateBy: "Admin",
          updateStatement: "Task has been updated",
        },
        {
          updateFor: "Admin",
          updateBy: "Admin",
          updateStatement: "Task has been updated",
        },
      ],
    },
    {
      createdAt: "1 Feb 2022",
      allUpdates: [
        {
          updateFor: "Admin",
          updateBy: "Admin",
          updateStatement: "Task has been updated",
        },
        {
          updateFor: "Admin",
          updateBy: "You",
          updateStatement: "Task has been updated finally",
        },
      ],
    },
    {
      createdAt: "1 Feb 2022",
      allUpdates: [
        {
          updateFor: "Admin",
          updateBy: "Admin",
          updateStatement: "Task has been updated",
        },
        {
          updateFor: "Admin",
          updateBy: "You",
          updateStatement: "Task has been updated finally",
        },
      ],
    },
    {
      createdAt: "1 Feb 2022",
      allUpdates: [
        {
          updateFor: "Admin",
          updateBy: "Admin",
          updateStatement: "Task has been updated",
        },
        {
          updateFor: "Admin",
          updateBy: "You",
          updateStatement: "Task has been updated finally",
        },
      ],
    },
    {
      createdAt: "1 Feb 2022",
      allUpdates: [
        {
          updateFor: "Admin",
          updateBy: "Admin",
          updateStatement: "Task has been updated",
        },
        {
          updateFor: "Admin",
          updateBy: "You",
          updateStatement: "Task has been updated finally",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="update-list-component">
        {updates.map((update) => {
          return (
            <div className="component">
              <div className="date">{update.createdAt}</div>
              <hr className="line"></hr>
              <div className="person">
                {update.allUpdates.map((updatenum) => {
                  return (
                    <>
                      <div className="updates">
                        <div className="profile">
                          <div className="profilePhoto">
                            <img alt="profilephoto" src={profilephoto} />
                          </div>
                          <div className="profileInfo">
                            <div className="taskPerson">
                              {updatenum.updateBy}
                            </div>
                            <div className="taskInfo">
                              {updatenum.updateStatement}
                            </div>
                          </div>
                        </div>
                        <div className="time">5 mins ago</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
}

export default UpdatesList;