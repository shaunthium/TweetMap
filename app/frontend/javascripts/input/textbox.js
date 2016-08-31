import React from 'react';
import styles from './main.css';

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  _onChange = (e) => {
    this.setState({text: e.target.value});
    this.props.setTransparency(true);
  }

  _sendData = () => {
    // Post data
    let url = '/api/v1/tweet/nearby_tweets';
    let data = {
      q: this.state.text,
      latitude: this.props.marker.position.lat,
      longitude: this.props.marker.position.lng,
      radius: 1,
      count: 20
    };

    $.post(url, data, function(data){
      console.log('data', data);
    });
  }

  _onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this._sendData();
    // Change transparency
    this.props.setTransparency(false);
  }

  render() {
    return (
      <div className={`${styles.container}`}>
        <form onSubmit={this._onSubmit}>
          <input type="text" onChange={this._onChange}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

Textbox.propTypes = {
  marker: React.PropTypes.object,
  setTransparency: React.PropTypes.func
};

export default Textbox;
