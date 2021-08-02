import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Back from './Elements/Back';
import Efficiency from './Elements/SearchElements/Efficiency';

class Result extends Component {
  static testProduct = {
    energyUsage: 123,
    modelNumber: 'model123',
    most_efficient: 'yes',
    name: 'debug product',
    regularPrice: 123,
    url: 'a_fake_debug_url.com',
  };

  constructor(props) {
    super(props);

    const { item } = this.props;
    this.item = item;
  }

  render() {
    const {
      energy_usage: energyUsage,
      modelNumber,
      most_efficient: mostEfficient,
      name,
      regularPrice,
      url, // a link where the product can be purchased
    } = this.item;
    return (
      <div>
        <Back />
        <h1>Our Recommendation</h1>
        <div className="result modal flex-col-left card">
          <h2>{name}</h2>
          <h3>
            model:
            {' '}
            {modelNumber}
          </h3>
          <br />
          <br />
          <p className="product-price">
            $
            {regularPrice}
          </p>
          <p className="product-link">
            {'Link to product: '}
            <a href={url} target="_blank" rel="noreferrer">{url}</a>
          </p>
        </div>
        <Efficiency usage={energyUsage} mostEff={mostEfficient} />
      </div>
    );
  }
}

Result.propTypes = {
  item: PropTypes.objectOf({
    energy_usage: PropTypes.number.isRequired,
    modelNumber: PropTypes.string.isRequired,
    most_efficient: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    regularPrice: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Result;
