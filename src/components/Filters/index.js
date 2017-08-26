import React, {Component} from 'react';
import SelectFilter from './SelectFilter';


export default class Filters extends Component {
  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} />
      </div>
    );
  };
}