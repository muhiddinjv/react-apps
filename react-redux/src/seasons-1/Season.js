import React from "react";

const getSeason = (lat, month) => {
  month = 9;
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const Season = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  return (
    <div>
        Season
    </div>
  );
};

export default Season;
