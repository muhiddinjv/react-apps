import React from "react";
import ReactDOM from "react-dom";

// const getBtnTxt = () => { return 'Worked!'; }

const App = () => {

  const style = {backgroundColor:'grey', color:'white'};
  const btnTxt = { text: 'click me' };
  // const arr = ['hi','there'];
  const clicked=(e)=>{alert(e.target)};

  return (
    <div style={{textAlign:'center'}}>
      <label className="label" htmlFor="name">Enter name: </label>
      <input id="name" type="text" />
      <button onClick={clicked} style={style}>{btnTxt.text}</button>
      {/* do not use {btnTxt} bc jsx cannot print out objects */}
      {/* use {btnTxt.text} instead so that jsx can understand it */}
    </div>
  );

};

ReactDOM.render(<App />, document.querySelector("#root"));
