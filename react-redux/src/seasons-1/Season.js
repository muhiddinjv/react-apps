import './Season.css';
import React from "react";

/*
instead of the following long and duplicated ternary expressions:
  const text = season === 'winter' ? 'Brrr, its chilly!' : 'Lets hit the beach!';
  const icon = season === 'winter' ? 'snowflake' : 'sun';
Use the seasonConfig below!
*/

const seasonConfig = {
  summer: {
    text: "Summer! Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Winter! Burr it is cold!",
    iconName: "snowflake"
  }
};


const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const Season = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div style={{border:"1px solid blue"}}>
      <i className={`bothicons icon-left ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`bothicons icon-right ${iconName} icon`}></i>
    </div>
  );
};

export default Season;
