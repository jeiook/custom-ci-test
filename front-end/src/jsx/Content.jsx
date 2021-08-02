import React, { Component } from 'react';
import Home from './Home';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Page: Home,
    };

    this.switchPage = this.switchPage.bind(this);
  }

  switchPage(page) {
    this.setState({
      Page: page,
    });
  }

  render() {
    const { Page } = this.state;
    return (
      <div>
        <Page />
      </div>
    );
  }
}

export default Content;
