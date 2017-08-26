import React, {Component} from 'react';

import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';


export default class DateRange extends Component {
  state = {
    from: null,
    to: null
  };

  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };

  render() {
    const {from, to} = this.state;
    const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;


    return (
      <div className="date-range">
        <DayPicker
          ref="daypicker"
          selectedDays={(day) => DateUtils.isDayInRange(day, {from, to})}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    );
  }
}