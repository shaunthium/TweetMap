import React from 'react';
import styles from './main.css';

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: []
    };
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

    $.post(url, data, (data) => {
      this.setState({data: JSON.parse(data)});
      console.log('data', data);
      this.refs['modal-btn'].click();
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
          <input type='text' onChange={this._onChange}/>
          <button type='submit' className='btn btn-primary'>Submit</button>

          <button type="button" className="btn btn-info btn-lg" ref='modal-btn' data-toggle="modal" data-target="#info" style={{visibility: 'hidden', display: 'none'}}></button>

          <div id="info" className="modal fade" role="dialog">
            <div className="modal-dialog">

              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Results</h4>
                </div>
                <div className="modal-body">
                  {
                    this.state.data.map((obj, index) => {
                      return <p>{index+1}. {obj.text}</p>
                    })
                  }
                </div>
              </div>

            </div>
          </div>
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
