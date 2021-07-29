import React, { Component } from 'react';
import Net from './Net.js';
import Home from './Home.js';
import Search from './Search.js';
import Loading from './Loading.js';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Page: Home,
      product: null
    }
    this.search = this.search.bind(this);
  }

  search(data) {
    Net.post(JSON.stringify(data), '/api/visitors', (response) => {
      this.setState({
        Page: Search,
        product: response
      });
    });
    this.setState({
      Page: Loading
    })
  }

  render() {
    const { Page } = this.state;
    return (
        <Page App={this}></Page>
    );
  }
}

export default App;
