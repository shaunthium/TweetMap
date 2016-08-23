import React from 'react';
import Map from '../misc/map.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <Map />
      </div>
    );
  }
}

export default Main;
