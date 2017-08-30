import React, {Component} from 'react';
import SelectFilter from './SelectFilter';
import DateRange from './DateRange';


export default class Filters extends Component {
  render() {
    return (
      <div>
        <SelectFilter />
        <DateRange />
      </div>
    );
  };
}