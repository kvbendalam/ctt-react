import React from 'react';
import { useParams } from 'react-router-dom';
import { manalibachelorsPackage, manlifamilyPackage, manalicouplesPackage } from './ItenaryData';
import './Package.css'; // Import the CSS file for styling

function Package() {
  const { place, type } = useParams();

  let data = null;

  if (place === 'Manali' && type === 'Bachelors') {
    data = manalibachelorsPackage;
  } else if (place === 'Manali' && type === 'Family') {
    data = manlifamilyPackage;
  } else if (place === 'Manali' && type === 'HoneyMoon') {
    data = manalicouplesPackage;
  }

  if (!data) {
    return <div>No data found for this package</div>;
  }

  const { itinerary, packageInclusion, packageExclusion } = data;

  return (
    <div className="itinerary-container">
      <h2>{type === 'HoneyMoon' ? "Honey Moon Couple Package Itinerary" : type === 'Family' ? "Family Package Itinerary" : "Bachelors Package Itinerary"}</h2>
      <div className="itinerary-list">
        {itinerary.map((day, index) => (
          <div key={index} className="day-container">
            <h3>{day.day}</h3>
            <p>{day.description}</p>
            <p><strong>Day Plan:</strong> {day.dayPlan}</p>
            <ul>
              {day.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="inclusions">
        <h3>Package Inclusions</h3>
        <ul>
          {packageInclusion.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="exclusions">
        <h3>Package Exclusions</h3>
        <ul>
          {packageExclusion.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Package;
