import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateRange from './DateRange';
import SelectFilter from './Select';


export default class Filters extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <SelectFilter />
        <DateRange />
      </div>
    );
  }
}