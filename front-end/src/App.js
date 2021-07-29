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

  debug() {
    return false;
  }

  search(data) {
    if (this.debug()) {
      this.setState({
        Page: Search,
        product: {
          energy_usage: 100,
          modelNumber: '123Test',
          most_efficient: 'No',
          name: 'Test Product',
          regularPrice: '100',
          url: './this_is_a_fake_link.com'
        }
      });
      return;
    }
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
