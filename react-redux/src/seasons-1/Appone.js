import React from "react";
import Season from "./Season";

const Appone = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err), 
  );

  return (
    <div style={{ border: "1px solid grey" }}>
      <h1>Appone</h1>
      <Season />
    </div>
  );
};

export default Appone;
