import React from "react";
import Season from "./Season";

// const Appone = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err),
//   );

//   return (
//     <div style={{ border: "1px solid grey" }}>
//       <h1>Appone</h1>
//       <Season />
//     </div>
//   );
// };

class Appone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
    };
  }
  render() { // React says "You MUST define render"
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return (
      <div style={{ border: "1px solid grey" }}>
        <h1>class app</h1>
        <Season />
      </div>
    );
  }
}

export default Appone;
