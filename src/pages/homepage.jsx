import React, { Component } from "react";
import Directory from "../components/common/directory/directory";
import "../styles/homepage.scss";

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}

export default HomePage;
