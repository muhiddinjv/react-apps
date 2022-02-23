import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

import errorImg from "../images/error.jpg";
import lifecycle from "../images/lifecycle.jpg";
import state from "../images/state.jpg";
import controlled from "../images/controlled.jpg";
import uncontrolled from "../images/uncontrolled.jpg";
import thisCode from "../images/thisCode.jpg";
import thisThis from "../images/this.jpg";
import thisError from "../images/thisError.jpg";
import solution from "../images/solution.jpg";

import Placeholder from "../A-compos/Placeholder";
import './Notes.css'

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
          <Placeholder>
          <h4>Problem: props only go down!</h4>
            <p>The props system only allows us to pass info from the parent component down to a child. If so, how can we pass info from a child back to the parent?</p>
            <h4>Solution: functions as props!</h4>
            <p>You can pass down a function as a prop from the parent down to a child and then pass the info back up to the parent.</p>
            <h4>Class VS Function = this.props</h4>
            <p>The only difference between class based component and a function based component is we use "this" before "props" like this "this.props.whatever"</p>
            </Placeholder>
            <Placeholder>
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
          </Placeholder>
          <Placeholder>
            <h3>Component State</h3>
            <img src={state} alt="state" />
            <h3>Component Lifecycle</h3>
            <img src={lifecycle} alt="life-cycle" />
          </Placeholder>
          <Placeholder>
            <h3>Uncontrolled VS Controlled </h3>
            <h4>Uncontrolled Component = data stored in DOM</h4>
            <i>
              The only way to figure out what the input of the element is to find it in the DOM and look at its value. As a developer, we don't like to store data inside of HTML elements. Instead, we want to centralize all of the data inside of our react component.
            </i>
            <img src={uncontrolled} alt="uncontrolled-component" />
            <h4>Controlled Component = data stored in Component</h4>
            <i>
              If you want to change the input value is, you can simply look at the "state" without having to dive into the DOM to find the input's value.
            </i>
            <img src={controlled} alt="controlled-component" />

          </Placeholder>
          <Placeholder>
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
              we look at what is <strong>to the left of the dot to the left of the
              function</strong> when it gets called. In our case, it is "car". So
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
            <div>
              <h3>Real Life Example of THIS Causing an Error</h3>
              <p>In the pic below, "this.setState" caused an error. </p>
              <img src={thisCode} alt="this" />
              <p>below is where the function onSearchSubmit coming from. Here "this" refers to <strong>"props"</strong> b/c it's to the left of the dot on the left of the function</p>
              <img src={thisThis} alt="this" />
              <p>"this.setState is not a function" is the error that "this" caused</p>
              <img src={thisError} alt="this-error" />
              
            </div>
            <div>
              <ol><h3>Three Solution:</h3>
              <li>Long-fix = "constructor"</li>
              <li>short and sweet-fix = "arrow function" {`(onFormSubmit=(e)=> this.state.term)`}</li>
              <li>pass arrow function directly into the element like this: {`<form onSubmit={(e)=>this.onFormSubmit(e)}></form>`}</li>
              </ol>
            </div>
            <img src={solution} alt="solution" />
          </Placeholder>

          <Placeholder>
            <h4>Axios VS Fetch</h4>
            <p><b>Axios</b> is a 3rd party package that you can install with npm and has all the necessary codes built in and this is what most developers use.</p>
            <p><b>Fetch</b> on the other hand is a browser's built-in DIY function which doesn't require any installs but it takes a ton of code to make it work.</p>
            </Placeholder>
          

          <div className="box">Hello</div>
        </div>
      )}
    </div>
  );
};

export default Notes;
