import React from "react";
import ReactDOM from "react-dom";
import Comment from "./comps-0/Comment";
import Header from "./comps-0/Header";
import Approval from "./comps-0/Approval";
import Message from "./comps-0/Message";
import Document from "./comps-0/Document";
import AppTwo from "./events-2/AppTwo";
import Notes from "./comps-0/Notes";
import Redux from './redux/Redux'
// import {Provider} from 'react-redux';
// import { createStore } from 'redux';

// const store = createStore();

const getTime = () => {
  return new Date().toLocaleTimeString();
};

const App = () => {
  return (
    <div className="app">
      <Redux/>
      <div className="ui container comments">
        <Notes/>
        <AppTwo />
        <Header />
        <Document />
        <div
          className="approval-cards"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <Approval>
            {/* <h4>Warning!</h4>
            <p>Are you sure?</p> */}
            <Message
              header="Message Component"
              text="this is the text of the 
            Message component. Its beautiful isn't it?"
            />
          </Approval>
          <Approval>
            <Comment
              author="John"
              img="img/avatar2.png"
              text="I love this Comment component inside Approval component!"
              time="3:00 PM"
            />
          </Approval>
          <Approval>
            <Comment
              author="Rambo"
              img="img/avatar3.png"
              text="Killer app!"
              time={getTime()}
            />
          </Approval>
          <Approval>
            <Comment
              author="Lola"
              img="img/avatar5.png"
              text="How did u do it?"
              time={getTime()}
            />
          </Approval>
          <Redux/>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(
  // <Provider store={store}>
    <App /> ,
  // </Provider>,
document.querySelector("#root"));
