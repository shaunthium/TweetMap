import React from 'react';
import styles from './main.css';
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: [],
      showModal: false
    };
  }

  _onInputChange = (e) => {
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
      console.log('data', data);
      this.setState({data: JSON.parse(data)});
      this._openModal();
    });
  }

  _openModal = () => {
    this.setState({showModal: true});
  }

  _closeModal = () => {
    this.setState({showModal: false});
  }

  _onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if ($.isEmptyObject(this.props.marker)) return;
    // Change transparency
    this.props.setTransparency(false);
    this._sendData();
  }

  render() {
    let tooltip = (
      <Tooltip id="modal-tooltip">
        {
          $.isEmptyObject(this.props.marker) ?
          "Please click on the map to drop a marker pin before clicking 'Submit'" :
          "Enter your keyword here, and press the 'Submit' button (or just hit enter) to see the list of tweets!"
        }
      </Tooltip>
    );
    return (
      <div className={`${styles.container}`}>
        <form onSubmit={this._onSubmit}>
          <OverlayTrigger overlay={tooltip} placement="bottom">
            <input
              type='text'
              onChange={this._onInputChange}
              style={{height: '2.5em'}}
              />
          </OverlayTrigger>
          <Button type="submit" bsStyle="primary">Submit</Button>
        </form>

        <Modal show={this.state.showModal} onHide={this._closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Tweet Results</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.data.map((obj, index) => <p key={index}>{index+1}. {obj.text}</p>)}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this._closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

Textbox.propTypes = {
  marker: React.PropTypes.object,
  setTransparency: React.PropTypes.func
};

export default Textbox;
