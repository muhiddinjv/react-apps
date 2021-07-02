import React from "react";

const Placeholder = (props) => {
  return <div className="ui placeholder segment" style={{textAlign:"center", margin:"20px"}}>{props.children}</div>;
};

export default Placeholder;
