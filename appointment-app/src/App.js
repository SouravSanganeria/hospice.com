import React, { Component } from "react";
import "./App.css";

import Table1 from "./slot";

class App extends Component {
  state = {
    imageUrl: "https://picsum.photos/200",
    details: "dyavxAVXIKbxidcscwafvedhjvxajxvuXIUBCYUWG  UYQWBAUYwgyqudguygbU"
  };
  render() {
    return (
      <div className="container">
        <br />
        <img align="left" src={this.state.imageUrl} alt="" />
        <span className="m-4">{this.state.details}</span>
        <div className="App container">
          <br />
          {/* <p className="Table-header">Doctor's Day Schedule</p> */}
          <Table1 />
        </div>
      </div>
    );
  }
}

export default App;
