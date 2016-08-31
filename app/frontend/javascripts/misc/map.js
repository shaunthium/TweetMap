import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';
import Textbox from '../input/textbox.js';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transparent: true,
      marker: {position: {lat: 37.0902, lng: -95.7129}}
    };
  }

  _setTransparency = (transparent) => this.setState({transparent})

  _onMapClicked = (event) => {
    let lat = event.latLng.lat();
    let lng = event.latLng.lng();

    this.setState({marker: {position: {lat, lng}}});
  }

  render() {
    return (
      <section style={{
        height: '500px',
        zIndex: '-999',
        opacity: (this.state.transparent ? '0.5' : '1')
      }}>
        <Textbox
          marker={this.state.marker}
          setTransparency={this._setTransparency} />
        <GoogleMapLoader
          containerElement={<div style={{height: "100%"}} />}
          googleMapElement={
            <GoogleMap
              defaultZoom={4}
              defaultCenter={{ lat: 37.0902, lng: -95.7129 }}
              onClick={this._onMapClicked} >
              <Marker {...this.state.marker} />
            </GoogleMap>
          }
        />
      </section>
    );
  }
}

export default Map;
