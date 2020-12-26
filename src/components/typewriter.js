import React from 'react';
import PropTypes from 'prop-types';
import '../styles/typewriter.css';

class Typewriter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let typewriterAnimation = `typing ${this.props.animationTime} steps(${this.props.animationSteps}, end), blink-caret .75s step-end infinite`;
    console.log(typewriterAnimation);
    return (
      <span style={{ display: "inline-block", height: "fit-content" }}>
        <div class="typewriterContainer">
          <div class="typewriter">
            <h1 style={{animation: typewriterAnimation}}>{this.props.text}</h1>
          </div>
        </div>
      </span>
    );
  }
};

Typewriter.defaultProps = {
  text: "", 
  animationSteps: 30, 
  animationTime: "3.5s"
}

Typewriter.propTypes = {
  text: PropTypes.string,
  animationSteps: PropTypes.number, 
  animationTime: PropTypes.string
}

export default Typewriter;