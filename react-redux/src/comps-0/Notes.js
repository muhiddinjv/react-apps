import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import errorImg from "../events-2/img/error.jpg";
import "./Notes.css";

const Notes = () => {
  const [show, toggleShow] = useState(false);
  const codeString = `class Car {
    setDriveSound(sound){
      this.sound = sound;
    }
    drive(){
      return this.sound;
    }
  }
  const car = new Car();
  car.setDriveSound('vroom');
  car.drive();`;

  return (
    <div className="ui segment parent">
      <button onClick={() => toggleShow(!show)} className="ui button">
        {show ? "Hide" : "Show"} My Notes
      </button>

      {/* Content Shown ---------------------------- */}
      {show && (
        <div className="contents">
          <div className="ui segment placeholder">
            <h4 className="ui header">Application Lifecycle</h4>
            <ol>
              <li>JS file loaded by browser</li>
              <li>Instance of App component is created</li>
              <li>App component 'constructor' function gets called</li>
              <li>
                State object is created and assigned to the 'this.state'
                property
              </li>
              <li>We call geolocation service</li>
              <li>React calls the components render method</li>
              <li>App returns JSX, gets rendered to page as HTML</li>
              <li>... wait ...</li>
              <li>We get result of geolocation!</li>
              <li>We update our state object with a call 'this.setState'</li>
              <li>React sees that we updated the state of a component</li>
              <li>React calls our 'render' method a second time</li>
              <li>Render method returns some (uploaded) JSX</li>
              <li>React takes that JSX and updates content onscreen</li>
            </ol>
          </div>
          <div className="ui segment placeholder">
            <h3>Most common error in React projects</h3>
            <em>
              Message Rephrase: I cannot access the property state on the value
              undefined b/c "this" is equal to "undefined" in this function
            </em>
            <img src={errorImg} alt="error" />
            <p>
              Open developer tools and type "undefined.state" and you will see
              the same message
            </p>
            <h4>What is "this" used for in a class?</h4>
            <p>
              "this" refers to the "SearchBar" class and its properties (e.g
              state, render, onFormSubmit) in the "SearchBar" component. For
              example, "this.state" is equal to "SearchBar.state"
            </p>
            {/* Embeded Code: <pre>{`<h1>Hello World</h1>`}</pre> */}
            <SyntaxHighlighter language="javascript" style={tomorrow}>
              {codeString}
              {/* themes: https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/prism.html */}
            </SyntaxHighlighter>

            <h4>How is the value of "this" determined in a function?</h4>
            <p>I have no idea for now</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
