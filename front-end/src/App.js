import React, { Component } from 'react';
import Net from './Net.js';
import Home from './Home.js';
import Search from './Search.js';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Page: Home,
      product: null
    }
    this.search = this.search.bind(this);
    this.searchCallback = this.searchCallback.bind(this);
  }

  search(data) {
    Net.post(JSON.stringify(data), '/api/visitors', this.searchCallback);
  }

  searchCallback (response) {
    let productData;
    if (typeof response == 'string') {
      productData = JSON.parse(response);
    } else {
      productData = response;
    }
    this.setState({
      Page: Search,
      product: productData
    });
  }

  render() {
    const { Page } = this.state;
    return (
        <Page App={this}></Page>
    );
  }
}

export default App;
