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
  const codeStringTwo = `
  const drive = car.drive;
  drive();
  `;
  const codeStringThree = `
  onFormSubmit(e){
    e.preventDefault();
    console.log(this.state.term)}
  `;

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
              "this" refers to the "SearchBar" class in the "SearchBar"
              component. For example, "this.state" is equal to
              "SearchBar.state". Whenever you want to figure out what the value
              of "this" is going to be equal to inside of a method on a class,
              we look at what is to the left of the dot to the left of the
              function when it gets called. In our case, it is "car". So
              "this.sound" equals to "car.sound".
            </p>
            {/* Embeded Code like this: <pre>{`<h1>Hello World</h1>`}</pre> */}
            <SyntaxHighlighter language="javascript" style={tomorrow}>
              {codeString}
              {/* themes: https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/prism.html */}
            </SyntaxHighlighter>
            <p>
              But what result we will get if we replace car.drive with const
              drive = car.drive?
            </p>
            <SyntaxHighlighter language="javascript" style={tomorrow}>
              {codeStringTwo}
            </SyntaxHighlighter>
            <p>
              The answer is "cannot read property 'sound' of undefined" b/c
              there is nothing to the left of "drive();" which means its
              undefined. Below is a problem to be solved:
            </p>
            <SyntaxHighlighter language="javascript" style={tomorrow}>
              {codeStringThree}
            </SyntaxHighlighter>
            <ol><h3>Three Solution:</h3>
            <li>Long-fix = "constructor"</li>
            <li>short and sweet-fix = "arrow function" {`(onFormSubmit=(e)=> this.state.term)`}</li>
            <li>pass arrow function directly into the element like this: {`<form onSubmit={(e)=>this.onFormSubmit(e)}></form>`}</li>
            </ol>
          </div>
          <div className="ui segment placeholder">
          <h4>Problem: props only go down!</h4>
            <p>The props system only allows us to pass info from the parent component down to a child. If so, how can we pass info from a child back to the parent?</p>
            <h4>Solution: functions as props!</h4>
            <p>You can pass down a function as a prop from the parent down to a child and then pass the info back up to the parent.</p>
            <h4>Class VS Function = this.props</h4>
            <p>The only difference between class based component and a function based component is we use "this" before "props" like this "this.props.whatever"</p>
          </div>
          <div className="ui segment placeholder">
            <h4>Axios VS Fetch</h4>
            <p><b>Axios</b> is a 3rd party package that you can install with npm and has all the necessary codes built in and this is what most developers use.</p>
            <p><b>Fetch</b> on the other hand is a browser's built-in DIY function which doesn't require any installs but it takes a ton of code to make it work.</p>
          </div>
          <div className="box">Hello</div>
        </div>
      )}
    </div>
  );
};

export default Notes;
