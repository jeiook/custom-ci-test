import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropDown extends Component {
  static getList(items) {
    return items.map((e) => DropDown.getItem(e));
  }

  static getItem(item) {
    return (<option value={item} key={item}>{item}</option>);
  }

  render() {
    const { name, id, itemList } = this.props;
    return (
      <select name={name} id={id}>{DropDown.getList(itemList)}</select>
    );
  }
}

DropDown.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  itemList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DropDown;
