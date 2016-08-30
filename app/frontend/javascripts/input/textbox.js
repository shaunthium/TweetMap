import React from 'react';

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  _onChange = (e) => {
    this.setState({text: e.target.value});
  }

  _sendData = () => {
    // Post data
    let url = '/api/v1/tweet/nearby_tweets';
    let data = {
      "q": this.state.text,
      "longitude": "37.781157",
      "latitude": "-122.398720",
      "radius": 1,
      "count": 3
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
    this.props.toggleTransparency();
  }

  render() {
    return (
      <div style={{position: 'absolute', left: '45%', top: '30%', zIndex: '999', opacity: '1'}}>
        <form onSubmit={this._onSubmit}>
          <input type="text" onChange={this._onChange}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

Textbox.propTypes = {
  toggleTransparency: React.PropTypes.func
};

export default Textbox;
