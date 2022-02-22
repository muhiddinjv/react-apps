import React from "react";
import ReactDOM from "react-dom";
import Header from "./A-compos/Header";
import Message from "./A-compos/Message";
import Document from "./A-compos/Document";
import Placeholder from "./A-compos/Placeholder";
import Notes from "./B-lifecycle/Notes";
import Pics from "./C-events/Pics";
import Comment from "./Projects/A-approval/Comment";
import Approval from "./Projects/A-approval/Approval";
import SongsIndex from './redux/SongsIndex';

const App = () => {
  return (
    <div className="app">
      <div className="ui container comments">
        <Notes/>
        <Header />
        <Document />
        <Pics />
        <Placeholder>
        <div
          className="approval-cards"
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-between' }}
        >
          <Approval>
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
              author="Bob"
              img="img/avatar1.png"
              text="I love my life!"
              time="5:00 PM"
            />
          </Approval>
          <Approval>
            <Comment   
              author="Paul"
              img="img/avatar3.png"
              text="I love my life!"
              time="5:00 PM"
            />
          </Approval>
        </div>
        </Placeholder>
      </div>
      <SongsIndex/>
    </div>
  );
};

ReactDOM.render(<App />,document.querySelector("#root"));
