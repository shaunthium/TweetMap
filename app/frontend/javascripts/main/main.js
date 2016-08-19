import React from 'react';
import styles from './main.css';
import InputTextbox from '../input/textbox.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`jumbotron`}>
        <InputTextbox />
      </div>
    );
  }
}

export default Main;
