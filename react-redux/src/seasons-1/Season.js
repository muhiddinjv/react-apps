import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const Season = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === 'winter' ? 'Brrr, its chilly!' : 'Lets hit the beach!';
  // const icon = season === 'winter' ? 'snowflake' : 'sun';
  return <h1>{text}</h1>
};


export default Season;
