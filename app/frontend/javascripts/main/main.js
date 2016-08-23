import React from 'react';
import styles from './main.css';
import Map from '../misc/map.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  render() {
    return (
      <div>
        <Map />
      </div>
    );
  }
}

export default Main;
