import React, { Component } from 'react';
import Verify from '../utils/Verify';
import DropDown from './Elements/DropDown';
import HomeError from './HomeError';

class Home extends Component {
  static getUserData() {
    return {
      name: document.getElementById('name').value,
      budget: document.getElementById('budget').value,
      product: document.getElementById('product').value,
      volume: document.getElementById('volume').value,
    };
  }

  static populateForm(data) {
    const {
      name, budget, product, volume,
    } = data;
    document.getElementById('name').value = name;
    document.getElementById('budget').value = budget;
    document.getElementById('product').value = product;
    let vol = volume;
    if (volume < 0) {
      vol = '';
    }
    document.getElementById('volume').value = vol;
  }

  static submit() {
    const data = Home.getUserData();
    if (Verify.userData(data)) {
      // todo
    } else {
      const home = document.getElementById('home');
      home.appendChild(HomeError.render());
    }
  }

  constructor(props) {
    super(props);

    this.products = ['fridge'];
  }

  render() {
    return (
      <div id="home" className="home modal flex-col card">
        <HomeError />
        <h1 id="welcome">Search Efficient Products</h1>
        <label htmlFor="name">
          Name
          <input type="text" id="name" name="name" required minLength="2" />
        </label>
        <label htmlFor="budget">
          Budget
          <input type="number" id="budget" name="budget" required min="0" />
        </label>
        <DropDown name="product_type" id="product" itemList={this.products} />
        <label htmlFor="budget">
          Volume Threshold in ft
          <sup>3</sup>
          {' '}
          (optional)
        </label>
        <input id="volume" name="volume" min="1" />
        <button type="submit" id="submit" onClick={Home.submit}>Search</button>
      </div>
    );
  }
}

export default Home;
