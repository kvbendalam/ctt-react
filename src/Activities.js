import React from "react";
import "./Activities.css";

function Activities({ activities }) {
  return (
    <div className="activities-container">
      {activities.map((activity, index) => (
        <div key={index} className="activity-card">
          <img src={activity.image} alt={activity.name} className="activity-image" />
          <div className="activity-info">
            <h3 className="activity-name">{activity.name}</h3>
            {/* <p className="activity-description">{activity.description}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Activities;
