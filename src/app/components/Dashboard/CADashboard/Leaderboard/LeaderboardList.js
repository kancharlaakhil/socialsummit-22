import React from "react";
import Ranker from "./Ranker";
import "./css/LeaderboardList.css";

function LeaderboardList() {
  const data = [
    { id: 1, name: "Ojus Thool", rank: 1, points: 885 },
    { id: 2, name: "Ojus Thool", rank: 2, points: 885 },
    { id: 3, name: "Ojus Thool", rank: 3, points: 885 },
    { id: 4, name: "Ojus Thool", rank: 4, points: 885 },
    { id: 5, name: "Ojus Thool", rank: 5, points: 885 },
    { id: 6, name: "Ojus Thool", rank: 6, points: 885 },
    { id: 7, name: "Ojus Thool", rank: 7, points: 885 },
    { id: 8, name: "Ojus Thool", rank: 8, points: 885 },
    { id: 9, name: "Ojus Thool", rank: 9, points: 885 },
    { id: 10, name: "Ojus Thool", rank: 10, points: 885 },
    { id: 11, name: "Ojus Thool", rank: 11, points: 885 },
    { id: 12, name: "Ojus Thool", rank: 12, points: 885 },
  ];

  return (
    <div className="leaderboardContainer">
      
      <div className="rankers">
        {data.map((element) => {
          //   console.log(element.id);
          return (
            <div className="ranker">
              <Ranker
                key={element.id}
                name={element.name}
                rank={element.rank}
                points={element.points}
              />
            </div>
          );
        })}
       
      </div>
    </div>
  );
}

export default LeaderboardList;