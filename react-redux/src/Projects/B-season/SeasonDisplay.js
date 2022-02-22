import './SeasonDisplay.css';
import React from "react";
/*
instead of the following 2 long and duplicated ternary expressions:
  const text = season === 'winter' ? 'Brrr, its chilly!' : 'Lets hit the beach!';
  const icon = season === 'winter' ? 'snowflake' : 'sun';
Use the seasonConfig below!
*/
const seasonConfig = {
  summer: {
    text: "Summer? Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Winter? Burr it is cold!",
    iconName: "snowflake"
  }
};
// notice how the object names (summer & winter) 
// perfectly match the object names in getSeason?
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  // season = 'summer' or 'winter'
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
