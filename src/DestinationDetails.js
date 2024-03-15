import React from "react";
import Activities from "./Activities";
import { useParams } from "react-router-dom";
import {manaliData, shimlaData, delhiData, mathuraData, vrindavanData} from './ActivitiesData'

function DestinationDetails() {
  const { place } = useParams();
  let data = ''

  if(place === 'manali'){
    data = manaliData;
  }else if(place === 'shimla'){
    data = shimlaData;
  }else if(place === 'delhi'){
    data = delhiData;
  }else if(place === 'mathura'){
    data = mathuraData;
  }else if(place === 'vrindhavan'){
    data = vrindavanData;
  }

  return (
    <div>
      <div>
        <h2 style={{margin:"20px"}}>Things to Do in {place} </h2>
        {data.map((dayActivities, index) => (
          <div key={index} style={{margin:"10px"}}>
            {/* <h3 style={{margin:"20px"}}>{dayActivities.day}</h3> */}
            <Activities activities={dayActivities.activities}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationDetails;
