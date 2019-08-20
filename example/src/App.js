import React, { Component } from "react";

import ReactGoogleSlides from "react-google-slides";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div style={{ padding: 20 }}>
          <ReactGoogleSlides
            width="100%"
            slidesLink="https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM"
            slideDuration={5}
          />
        </div>
        <div style={{ padding: 20 }}>
          <ReactGoogleSlides
            width="50%"
            slidesLink="https://docs.google.com/presentation/d/1_f7J6Mu4wAy5TOkcgQREekvGvGd3V_Tt09nMmKb6T0I/edit?usp=sharing"
            showControls
            loop
          />
        </div>
        <div style={{ padding: 20 }}>
          <ReactGoogleSlides width="75%" slideDuration={10} showControls />
        </div>
        <div style={{ padding: 20 }}>
          <ReactGoogleSlides width={300} height={300} loop />
        </div>
      </div>
    );
  }
}
