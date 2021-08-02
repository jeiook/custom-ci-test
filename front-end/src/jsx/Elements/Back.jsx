import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Back extends Component {
  constructor(props) {
    super(props);

    const { backFn } = this.props;
    this.backFn = backFn;
  }

  render() {
    return (
      <button type="button" className="back card" onClick={this.backFn}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ic_arrow_back_48px.svg/1024px-Ic_arrow_back_48px.svg.png"
          alt="go back"
        />
      </button>
    );
  }
}

Back.propTypes = {
  backFn: PropTypes.func.isRequired,
};

export default Back;
