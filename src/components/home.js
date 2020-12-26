import React from 'react';
import '../styles/home.css';
import Typewriter from "./typewriter";

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {

    return (
      <div id="background">
        <Typewriter text="Hello! My name is Allison DiNapoli. I'm a software engineer in the Seattle area." animationSteps={80} animationTime="10s" />

      
      </div>
    );
  }
};