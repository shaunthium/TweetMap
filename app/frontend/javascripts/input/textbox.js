import React from 'react';

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  _onChange = (e) => {
    this.setState({text: e.target.value});
  }

  _onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // TODO: Submit logic here

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
