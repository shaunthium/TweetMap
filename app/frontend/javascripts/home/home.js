import React from 'react';
import { browserHistory } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  _transitionToLogin = () => {
    browserHistory.push('/users/login')
  }

  render() {
    return (
      <div>
        <a href="#/" onClick={this._transitionToLogin}>Log in here</a>
      </div>
    );
  }
}

export default Home;
